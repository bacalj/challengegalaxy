<template>
    <div class="clue column" @click="toggleClue">
        <transition name="simple-fade">
            <div v-if="!revealed" class="clue-cover button is-info is-medium is-fullwidth is-rounded">
                <b>?</b>
            </div>
        </transition>
        <transition name="simple-fade">
            <div v-if="revealed" class="clue-content image">
                <img v-if="contentType == 'image'" :src="content">
                <p v-if="contentType == 'text'">{{ content }}</p>
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
    
    props:[
        'content'
    ]
}
</script>

<style lang="scss" scoped>
.clue {
    flex-basis: auto;
}

.simple-fade-enter-active {
    transition: all .2s ease;
}
.simple-fade-leave-active {
    transition: all .2s ease;
}
.simple-fade-enter, .simple-fade-leave-to {
    opacity: 0;
}
</style>