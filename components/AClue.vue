<template>
    <div class="clue column" @click="toggleClue">
        <div v-if="!revealed" class="clue-cover button is-info is-medium is-fullwidth is-rounded">
            <b>?</b>
        </div>
        <div v-if="revealed" class="clue-content image">
            <img v-if="contentType == 'image'" :src="content">
            <p v-if="contentType == 'text'">{{ content }}</p>
        </div>
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
</style>