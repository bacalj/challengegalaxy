<template>
    <div class="clue" @click="toggleClue">
        <div v-if="!revealed" class="clue-cover">
            ?
        </div>
        <div v-if="revealed" class="clue-content">
            <img v-if="contentType == 'image'" :src="content">
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
        const imageTypes = ['.png', '.svg', '.jpg'];
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

<style scoped>
.clue {
    padding:5px;
}

.clue-cover {
    display:inline;
    height:30px;
    width:30px;
    border:1px solid silver;
    padding:5px;
    box-sizing: border-box;
}
</style>