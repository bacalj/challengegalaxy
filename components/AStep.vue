<template>
    <div class="step column">
        <button class="button step-toggler is-primary"  @click="toggleStep()">
            <span v-if="label" v-html="label"></span>
            <span v-else>{{ num }}</span>
        </button>
        
        <transition name="slide-fade">
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
                <section class="clues-section has-background-info">
                    <div class="clues">
                        <a-clue 
                            v-for="clue in clues" 
                            :content="clue.content"
                            :cover="clue.cover"
                            :type="clue.type"
                            :level="clue.showAtLevelAndAbove"
                            :key="clue.id">
                        </a-clue>
                    </div>
                </section>
            </div>
        </transition>
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

    computed:{
        stepToggleText(){
            return this.stepOpen ? '-' : '+';
        }
    },
    
    props:[
        'img',
        'text',
        'clues',
        'num',
        'label'
    ]
}
</script>

<style lang="scss" scoped>
.step {
    .intro-section {
        //padding: 1.5rem 1.5rem 3rem;
        padding:1.5rem;
        border-radius:15px 15px 0px 0px;
   }
   .goal-text {
       color: #ffffff;
   }
   .step-text {
       color: #ffffff;
   }
   .clues {
        flex-flow: wrap;
        padding:8px;
    }
    .clues-section {
        border-radius: 0px 0px 15px 15px;
    }
    img {
        border-radius: 4px;
    }
}

.step-toggler {
    position: relative;
    left:-12px;
    top:10px;
    border-radius:50px;
}

.slide-fade-enter-active {
    transition: all .2s ease;
}
.slide-fade-leave-active {
    transition: all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

</style>