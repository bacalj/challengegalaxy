<template>
    <div class="hero-body">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <img src="/pngs/cglogo2.png" alt="Challenge Galaxy"/>
                    
                    <h2 class="subtitle">
                        Learn Scratch by working on challenges.<br>
                        Share your solutions with others around the world!  
                    </h2>

                    <div class="flex-row intro-buttons">
                        <a class="button is-primary"
                            href="https://scratch.mit.edu" target="_blank">Open Scratch</a>
                        <n-link class="button is-primary" to="/challenges">Find a challenge</n-link>
                    </div>
                </div>
                <div class="column">
                    <div class="video-player intro-video">
                        <div>
                            <img src="jpgs/cgandscratch.jpg" alt="still image of ChallengeGalaxy in use">
                        </div>
                    </div>                      
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        transition: 'pagechange'
    }
</script>

<style lang="scss" scoped>
/* about to enter */
.fade-enter {
    opacity: 0;
    height:0px;
}

.fade-enter-active {
    transition: all .5s;
}

.fade-enter-to { 
    opacity: 1 
}

/* about to leave */
.fade-leave {
    opacity: .1;
}

.fade-leave-active { 
    transition: height .1s; 
    transition: opacity .1s;
}

.fade-leave-to { 
    height:0px;
    opacity: 0; 
}
</style>