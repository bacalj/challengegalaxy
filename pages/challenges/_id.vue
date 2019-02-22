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
                <div class="column">
                    <div class="goal-image image">
                        <img :src="challenge.goalImg">
                    </div>
                </div>
            </div>
        </section>

        <a-step 
            v-for="step in steps" 
            :clues="step.clues"
            :img="step.stepImg"
            :text="step.stepText"
            :key="step.id">
        </a-step>

<!-- 



        <section class="clues-section section has-background-grey-lighter">
            <div class="clues columns is-mobile">
                <a-clue 
                    v-for="clue in clues" 
                    :content="clue.content"
                    :key="clue.id">
                </a-clue>
            </div>
        </section> -->

    </div>
</template>

<script>
import AStep from '~/components/AStep.vue'

export default {
    components:{
        AStep,
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
        steps(){
            return this.challenge.steps
        },
    }
}
</script>
        
<style scoped>
.challenge-container {
    max-width: 480px;
}
.challenge-intro-section {
    margin-bottom: 3em;
}
</style>