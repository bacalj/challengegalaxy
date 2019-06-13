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
                        <nuxt-link class="button is-primary" to="/how-it-works">How it works</nuxt-link>
                        <n-link class="button is-primary" to="/challenges">Find a challenge</n-link>
                    </div>
                </div>
                <div class="column has-text-centered">
                    <div class="video-player intro-video">
                        <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_ce9988zz4y videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/ce9988zz4y/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
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

.hero-body {
    animation-name: enterhero;
    animation-duration:.8s;
}
.video-player iframe {
    width: 480px;
    height: 270px;
}

@keyframes enterhero {
    from {
        opacity:0;
    }

    to {
        opacity:1;
    }
}
</style>