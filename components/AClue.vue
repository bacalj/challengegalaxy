<template>
    <div class="clue" @click="toggleClue">
        <!-- <transition name="fade"> -->
        <div class="clue-cover button is-primary is-medium is-fullwidth" :class="{ 'flat-bottom' : revealed }">
            <b>?</b>
        </div>
        <!-- </transition> -->
        <transition name="fade">
            <div v-if="revealed" class="clue-content" :class="{ 'image': isImage }">
                <img v-if="this.isImage" :src="content">
                <div v-if="this.isText">{{ content }}</div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    data(){
        return {
            revealed: false,
            contentType:'unknown'
        }
    },

    methods:{
        toggleClue(){
            this.revealed = !this.revealed;
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
    },

    computed:{
        isImage(){
            return this.contentType == 'image';
        },

        isText(){
            return this.contentType == 'text';
        }
    },
    
    props:[
        'content'
    ]
}
</script>

<style lang="scss" scoped>
.clue {
    flex-basis: auto;
    padding:8px;
}

.clue-content {
    padding:8px;
    border:2px solid #00d1b2;
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