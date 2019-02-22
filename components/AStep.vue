<template>
    <div class="step column">
        <button @click="toggleStep()">{{ stepToggleText }}</button>
        <div v-show="stepOpen" class="step-wrap">
            <section class="intro-section section has-background-info">
                <div class="step-text subtitle">
                    {{ text }}
                </div>
                <div class="columns is-mobile">
                    <div class="column">
                        <div class="step-image image">
                            <img :src="img">
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
            stepOpen: false
        }
    },

    methods:{
        toggleStep(){
            this.stepOpen = !this.stepOpen;
        }
    },

    mounted(){
    },

    computed:{
        stepToggleText(){
            return this.stepOpen ? '-' : '+';
        }
    },
    
    props:[
        'img',
        'text',
        'clues',
    ]
}
</script>

<style lang="scss" scoped>
.step {
    .intro-section {
        padding: 1.5rem 1.5rem 3rem;
   }
   .goal-text {
       color: #ffffff;
   }
   .clues {
        flex-flow: wrap;
    }
}

</style>