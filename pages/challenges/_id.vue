<template>
    <div class="challenge-container container is-fullhd">

        <section class="section challenge-heading has-background-white-ter">
            <h1 class="challenge-title title">
                {{ challenge.title }}
            </h1>

            <div class="goal-text subtitle">
                {{ challenge.goalText }}
            </div>
        </section>

        <section class="challenge-intro-section section has-background-info">
            <div class="columns is-mobile">
                <div class="column is-three-fifths is-offset-one-fifth">
                    <div class="goal-image image">
                        <img :src="challenge.goalImg">
                    </div>
                </div>
            </div>
        </section>

        <section class="clues-section section has-background-grey-lighter">
            <div class="clues columns is-mobile">
                <a-clue 
                    v-for="clue in clues" 
                    :content="clue.content"
                    :key="clue.id">
                </a-clue>
            </div>
        </section>

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