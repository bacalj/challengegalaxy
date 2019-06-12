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
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 769px) {
    .hero {
        text-align: center;
    }
}

.hero .title {
    font-size: 2.5rem;
}
</style>