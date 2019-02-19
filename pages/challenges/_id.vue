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



        <div class="clues columns">
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
        }
    },

    computed:{
        challenge(){
            return this.$store.state.en[this.id]
        },

        clues(){
            return this.challenge.clues
        }
    }
}
</script>
        
<style scoped>
</style>