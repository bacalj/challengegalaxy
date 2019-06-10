<template>
    <div class="step column">
        <button 
            class="button step-toggler is-primary"  
            @click="toggleStep()"
        >
            <span v-if="label" v-html="label"></span>
            <span v-else>{{ num }}</span>
        </button>
        
        <transition name="slide-fade">
            <div v-show="stepOpen" class="step-wrap">

                <section class="intro-section section has-background-info">
                    <div class="step-text subtitle">
                        {{ text }}
                    </div>
                    <div class="columns is-mobile" v-if="img">
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
                            :key="clue.id"
                            :id="clue.id"
                            :cr="cluesRevealed"
                            :sprite="clue.sprite">
                        </a-clue>
                    </div>

                    <div class="clue-buttons">
                        <button 
                            class="button is-warning is-rounded more-clues" 
                            :disabled="noCluesLeft"
                            @click="gimmieAClue()">
                            {{ gimmieClueText }}
                        </button>

                        <!-- <button
                            class="button is-warning is-rounded less-clues" 
                            v-show="this.cluesRevealed > 0"
                            @click="oneLessClue()">
                            Take away a clue!
                        </button> -->

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
            stepOpen: false,
            cluesRevealed: this.initialCluesVisible
        }
    },

    methods:{
        toggleStep(){
            this.stepOpen = !this.stepOpen;
        },

        gimmieAClue(){
            this.cluesRevealed++;
            if (this.cluesRevealed > this.clues.length){
                this.cluesRevealed = this.clues.length;
            }
        },

        oneLessClue(){
            this.cluesRevealed--;
            if (this.cluesRevealed < 0){
                this.cluesRevealed = 0;
            }
        }
    },

    computed:{
        stepToggleText(){
            return this.stepOpen ? '-' : '+';
        },

        noCluesLeft(){
            return this.cluesRevealed >= this.clues.length;
        },

        gimmieClueText(){
            if (this.cluesRevealed == 0 ){
                return 'Give me a clue!';
            } else if (this.cluesRevealed >= this.clues.length ) {
                return 'No clues left! Ask a friend?';
            } else {
                return 'Give me another clue!';
            }
        }
    },
    
    props:[
        'img',
        'text',
        'clues',
        'num',
        'label',
        'initialCluesVisible'
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
        padding-bottom:20px;
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

.clue-buttons {
    //padding-top:20px;
    text-align: center;
    margin: 0 auto;
    margin-top:10px;
    position: relative;
    top:-12px;
}
</style>