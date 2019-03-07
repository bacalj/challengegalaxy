<template>
    <div class="clue" @click="toggleClue">
        <div class="lock-and-key" v-if="this.haslock">
            <div class="lock-form" v-show="lockFormOpen">
                Type this backwards to open: {{ lockCombo.split("").reverse().join("") }}
                <input @keyup="unlockIfComboCorrect" v-model="lockEntryText">
            </div>
            
            <button class="the-lock lock-info" @click="handleLockClick">
                <span v-if="lockedState"><i class="fas fa-lock"></i></span>
                <span v-else><i class="fas fa-lock-open"></i></span>
            </button>
        </div>
     
        <div class="clue-cover contained" :class="{ 'flat-bottom' : revealed, 'is-locked' : lockedState }" v-html="cover"></div>
  
        <transition name="fade">
            <div 
                v-show="revealed && !lockedState" 
                class="clue-content contained" 
                :class="{ 'image': isImage, 'scratchblock-clue' : isScratchblock }"
            >
                <img v-show="this.isImage" :src="content">
                <div v-show="this.isText" v-html="content"></div>
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
            lockEntryText: 'Type the code...'
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
            this.lockEntryText = 'Type the code...';
            this.lockedState = true;
        },

        handleLockClick(){
            if ( this.lockFormOpen == true ){
                this.relock();
                this.closeLockForm();
            } else {
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
        
        if ( this.haslock ){
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
        }
    },
    
    props:[
        'content',
        'cover',
        'haslock'
    ]
}
</script>

<style lang="scss" scoped>

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

.clue-cover.flat-bottom:hover {
    background-color: hsl(0, 0%, 86%);
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
    width: auto;
    max-width: 100%;
    margin: 0 auto;
}

.clue-content {
    padding:20px;
    background-color: hsl(0, 0%, 86%);
    border-radius:0px 0px 3px 3px;
}

.scratchblock-clue {
    text-align:center;
}


.flat-bottom {
    border-radius: 3px 3px 0px 0px;
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