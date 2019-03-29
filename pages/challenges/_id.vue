<template>
    <div class="challenge-container container is-fullhd">
        <section class="section challenge-heading has-background-dark">
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

        <div v-if="challenge.studio">
            <button class="button step-button is-primary"><i class="fas fa-share"></i>&nbsp;Share!</button>
            <section class="challenge-studio column has-background-info">
                <div>Add your project to the Studio and see how other people made their projects.</div>
                <a class="button is-primary step-toggler" target="_blank" v-bind:href="challenge.studio">Studio</a>  
            </section>
        </div>
    </div>
</template>

<script>
import AStep from '~/components/AStep.vue'
import LevelSlider from '~/components/LevelSlider.vue'

export default {
    components:{
        AStep,
        LevelSlider
    },

    data(){
        return {
            id: this.$route.params.id
        }
    },
    
    mounted(){
        window.setTimeout(function(){ 
            scratchblocks.renderMatching("pre.blocks",{style:"scratch3"}); 
            const sbs = document.querySelectorAll('pre.blocks');
            sbs.forEach( ( pre ) => {
                pre.setAttribute("style", "background-color:#dbdbdb; padding:0px;");
            })
            const sbsvgs = document.querySelectorAll('.scratchblocks svg');
            sbsvgs.forEach( (svg) => {
                svg.setAttribute("viewBox", "0 0 420 " + svg.getAttribute("height"));
                svg.setAttribute("width", "");
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

.challenge-title {
    margin-top:20px;
}

h1, .goal-text.subtitle {
    color:#efefef;
}
.contained {
    max-width:480px;
}
.challenge-container {
    max-width: 480px;
    padding-bottom:60px;
}
.challenge-intro-section {
    margin: 0.75rem;
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
section {
    padding:1.7rem;
    border-radius:15px;
}
.challenge-studio {
    margin: 0.75rem;
    color: #ffffff;
}
.step-button {
    position: relative;
    top:25px;
    border-radius:50px;
    font-weight: 600;
}
</style>