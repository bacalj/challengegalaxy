<template>
    <div class="clue" @click="toggleClue" :class="type" v-show="visible">
        <div class="lock-and-key" v-if="hasLock">
            <div class="lock-form" v-show="lockFormOpen">
                Type this backwards to unlock: {{ lockCombo.split("").reverse().join("") }}
                <input @keyup="unlockIfComboCorrect" v-model="lockEntryText" placeholder="Type the code...">
            </div>
            <button class="the-lock lock-info" @click="handleLockClick">
                <span v-if="lockedState"><i class="fas fa-lock"></i></span>
                <span v-else><i class="fas fa-lock-open"></i></span>
            </button>
        </div>
     
        <div 
            class="clue-cover contained" 
            :class="{ 'flat-bottom' : revealed, 'is-locked' : lockedState }" 
            v-html="cover">
        </div>
  
        <transition name="fade">
            <div 
                v-show="revealed && !lockedState" 
                class="clue-content contained" 
                :class="{ 'image': isImage, 'scratchblock-clue' : isScratchblock }"
                v-bind:style='{ backgroundImage: spriteUrl }'
            >
                <img v-if="this.isImage" :src="content">
                <div v-else v-html="content"></div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    data(){
        return {
            revealed: false,
            contentType:'unknown',
            lockedState: false,
            lockFormOpen: false,
            lockCombo: '',
            lockEntryText: ''
        }
    },

    methods:{
        toggleClue(){
            if ( this.lockedState == false ){
                this.revealed = !this.revealed;
            }
        },

        unlockIfComboCorrect(){
            if(this.lockEntryText == this.lockCombo){
                this.unlock();
                this.closeLockForm();
                this.revealed = true;
            }
        },

        showLockForm(){
            this.lockFormOpen = true;
        },

        closeLockForm(){
            this.lockFormOpen = false;
        },

        unlock(){
            this.lockedState = false;
        },

        relock(){
            this.revealed = false;
            this.lockEntryText = '';
            this.lockedState = true;
        },

        handleLockClick(){
            if ( this.lockedState) {
                this.showLockForm();
            }
        },

        setCombo(){
            const str = 'galaxy';
            for ( var i = 0; i < 4; i++ ){
                this.lockCombo += str.charAt(Math.floor(Math.random() * str.length))
            }
        }
    },

    mounted(){
        const contentDetector = this.content.slice(-4);
        const imageTypes = ['.png', '.svg', '.jpg', '.gif'];

        if (imageTypes.includes(contentDetector)){
            this.contentType = 'image';
        } else {
            this.contentType = 'text'
        }
        
        if ( this.type == 'locked' ){
            this.relock();
            this.setCombo();
        }
    },

    computed:{
        isImage(){
            return this.contentType == 'image';
        },

        isText(){
            return this.contentType == 'text';
        },

        isScratchblock(){
            return this.content.includes('<pre class="blocks">');
        },
        
        hasLock() {
            return this.type == 'locked';
        },

        spriteUrl() {
            if (this.sprite) { 
                return 'url("/sprites/'+ this.sprite + '")'
            }
        },

        visible(){
            return this.id <= this.cr;
        }
    },
    
    props:[
        'content',
        'cover',
        'type',
        'sprite',
        'id',
        'cr'
    ]
}
</script>

<style lang="scss">

.clue {
    flex-basis: auto;
    padding:8px;
}

.contained {
    max-width: 480px;
}

.clue-cover {
    background-color: hsl(0, 0%, 86%);
    padding: 10px;
    text-align:center;
    border-radius:3px;
    cursor: pointer;
    &:hover {
        background-color:whitesmoke;
    }
}
.clue-cover:before {
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    font-style: normal;
    display: inline-block;
    text-decoration: inherit;
    margin-right: 1rem;
}
// .clue.code .clue-cover:before {
//     content: '\f121';
// }
.clue.idea .clue-cover:before {
    content: '\f0eb';
}
.clue.info .clue-cover:before {
    content: '\f129';
}
.clue.extra .clue-cover:before {
    content: '\f069';
}
.clue.question .clue-cover:before {
    content: '\f128';
}
.clue-cover.flat-bottom:hover {
    background-color: hsl(0, 0%, 86%);
}

.clue.code .clue-cover:before {
    //content: url('https://www.challengegalaxy.com/svgs/scratchblocksicon.svg');
    content: url('~static/svgs/scratchblocksicon.svg');
    position: relative;
    right: -8px;
    top: 4px;
}

// .clue-cover.is-locked::after {
//     position: relative;
//     font-style: normal;
//     font-variant: normal;
//     text-rendering: auto;
//     -webkit-font-smoothing: antialiased;
//     content:" 🔒";
//     font-weight: 400;
// }
.lock-form {
    color: white;
    margin-bottom: 10px;
}

.is-locked {
    color:#333;
}
.lock-info {
   position: absolute;
   padding:6px;
   border:0px;
   right:28px;
   background-color: hsl(0, 0%, 86%);
   border-radius:10px;
}
.clue img {
    display: block;
    width: auto;
    max-width: 100%;
    margin: 0 auto;
}

.clue-content {
    padding:20px;
    background-color: hsl(0, 0%, 86%);
    border-radius:0px 0px 3px 3px;
    background-position: 95% top;
    background-repeat: no-repeat;
    background-blend-mode: color-burn;
    background-size: 50px;
}

.flat-bottom {
    border-radius: 3px 3px 0px 0px;
}
blockquote {
    padding-left: 20px;
    font-style: italic;
    border-left: 4px solid #ccc;
}
ol, ul {
    margin-left: 20px;
}
/* about to enter */
.fade-enter {
    opacity: 0;
    height:0px;
}

.fade-enter-active {
    transition: all .5s;
}

.fade-enter-to { 
    opacity: 1 
}

/* about to leave */
.fade-leave {
    opacity: .1;
}

.fade-leave-active { 
    transition: height .1s; 
    transition: opacity .1s;
}

.fade-leave-to { 
    height:0px;
    opacity: 0; 
}

</style>