<template>
    <div class="challenge-container">
        <h1 class="challenge-title">
            {{ challenge.title }}
        </h1>

        <div class="goal-text">
            {{ challenge.goalText }}
        </div>

        <div class="goal-image">
            <img :src="challenge.goalImg">
        </div>



        <div class="clues">
            <a-clue 
                v-for="clue in clues" 
                :content="clue.content"
                :key="clue.id">
            </a-clue>
        </div>

    </div>
</template>

<script>
import AClue from '~/components/AClue.vue'

export default {
    components:{
        AClue,
    },

    data(){
        return {
            id: this.$route.params.id,
            lang: 'en',
            availLangs: this.$store.state.availLangs
        }
    },

    computed:{
        challenge(){
            return this.$store.state[this.lang][this.id]
        },

        clues(){
            return this.challenge.clues
        }
    },

    mounted(){
        /* if we have a translation, load it, otherwise english */
        if (this.$store.state.langs.includes(this.$route.query.lang)){
            this.lang = this.$route.query.lang;
        } 
    }
}
</script>
        
<style scoped>

.challenge-title {
    font-weight: bold;
    font-size:20px;
}

.challenge-container {
    padding:20px;
    border:3px solid blue;
    width:600px;
    margin:0 auto;
    text-align: center;
}

.clues {
    text-align:center;
}
</style>