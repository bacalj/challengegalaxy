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
                    <div class="challenge-project" v-if="challenge.scratchprojid">
                        <iframe width="100%" :src="'https://scratch.mit.edu/projects/' + challenge.scratchprojid + '/embed'" scrolling="no"></iframe>
                    </div>
                    <div v-else class="goal-image image">
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
            :num="step.stepNum"
            :label="step.stepLabel"
            :key="step.id">
        </a-step>
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
    
    mounted(){
        window.setTimeout(function(){ 
            scratchblocks.renderMatching("pre.blocks",{style:"scratch3"}); 
            const sbs = document.querySelectorAll('pre.blocks');
            sbs.forEach( ( pre ) => {
                pre.setAttribute("style", "background-color:#dbdbdb; padding:0px;");
            })
        }, 100);  
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

.contained {
    max-width:480px;
}
.challenge-container {
    max-width: 480px;
    padding-bottom:60px;
}
.challenge-intro-section {
    margin-bottom: 1em;
    padding:1.7rem;
    border-radius:15px;
}
.challenge-project {
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    padding-top: 25px;
    padding-bottom: 67.5%;
    height: 0;
    background-image: url('/jpgs/loading.jpg');  
}
.challenge-project iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>