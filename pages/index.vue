<template>
<<<<<<< HEAD
    <div>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <h1 class="title">
                                Challenge Galaxy
                            </h1>
                           
                            <div v-if="showTheFallingStars">
                                <!-- these will be abstracted into a function later -->
                                <a-star speed="slow"    ystart="5%" xstart="0%"     w="10px"   h="10px" color="#fefefe"></a-star>
                                <a-star speed="medium"  ystart="12%" xstart="11%"    w="25px"   h="25px" color="#9012FE"></a-star>
                                <a-star speed="fast"    ystart="16%" xstart="15%"    w="50px"   h="50px" color="#fefefe"></a-star>
                                <a-star speed="slow"    ystart="20%" xstart="18%"    w="10px"   h="10px" color="#9012FE"></a-star>
                                <a-star speed="medium"  ystart="6%" xstart="23%"    w="25px"   h="25px" color="#fefefe"></a-star>
                                <a-star speed="fast"    ystart="15%" xstart="34%"    w="50px"   h="50px" color="#9012FE"></a-star>
                                <a-star speed="slow"    ystart="40%" xstart="56%"    w="10px"   h="10px" color="#fefefe"></a-star>
                                <a-star speed="medium"  ystart="7%" xstart="43%"    w="25px"   h="25px" color="#9012FE"></a-star>
                                <a-star speed="fast"    ystart="30%" xstart="65%"    w="50px"   h="50px" color="#fefefe"></a-star>
                                <a-star speed="slow"    ystart="80%" xstart="74%"    w="10px"   h="10px" color="#9012FE"></a-star>
                                <a-star speed="medium"  ystart="60%" xstart="81%"    w="25px"   h="25px" color="#fefefe"></a-star>
                                <a-star speed="fast"    ystart="80%" xstart="98%"    w="50px"   h="50px" color="#9012FE"></a-star>
                            </div>

                            <h2 class="subtitle">
                                Learn Scratch through these interactive challenges<br>
                                Share with others around the world
                            </h2>
                            <div class="flex-row intro-buttons">
                                <a class="button is-primary"
                                 href="https://scratch.mit.edu" target="_blank">Open Scratch</a>
                                <n-link class="button is-primary" to="/#featured">Find a challenge</n-link>
                            </div>
                        </div>
                        <div class="column">
                            <div class="video-player intro-video">
                                <div class="wistia_embed wistia_async_j38ihh83m5" style="height:180px;width:320px">&nbsp;</div>
                            </div>                      
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="featured section has-background-dark has-text-centered">
            <a name="featured" id="featured"></a>
            <h2 class="title is-2">Featured Challenges</h2>
            <div class="tile is-ancestor">
                <a-challenge
                    v-for="challenge in featured"
                    :id="challenge.id"
                    :key="challenge.id">
                </a-challenge>
            </div>
            <n-link to="/challenges" class="button is-warning is-medium">Explore more challenges</n-link>
        </section>
    </div>
=======
    <section class="section">
        <h1 class="title is-1">Welcome to ChallengeGalaxy!</h1>

        <div class="tile is-ancestor">
            <div class="tile box">
                <div class="content">
                    <p class="title">Mazes</p>
                    <p class="subtitle">Make a maze game.</p>
                    <figure class="image is-416x348">
                        <img src="/gifs/maze_glitch.gif">
                    </figure>
                    <a class="button is-primary" href="/challenges/maze">Try this challenge</a>
                </div>
            </div>
            <div class="tile box">
                <div class="content">
                    <p class="title">Video Sensing</p>
                    <p class="subtitle">Use your webcam to interact with Scratch!</p>
                    <figure class="image is-1488x362">
                        <img src="/gifs/video-sensing-collect-gems.gif">
                    </figure>
                    <a class="button is-primary" href="/challenges/video-sensing">Try this challenge</a>
                </div>
            </div>
        </div>
    </section>
>>>>>>> 8f442ad94f01b764a3760cbabd11e73cb63f7c81
</template>

<script>
import AChallenge from '~/components/AChallenge.vue'
import { mapState } from 'vuex'
import AStar from '~/components/AStar.vue'

export default {
    components:{
        AChallenge,
        AStar
    },
    computed: {
        ...mapState({
            featured: state => state.challengeslist.featured,
        }),

        showTheFallingStars(){
            return this.$store.state.prefs.localprefs.fallingStars;
        }
    },
    head () {
        return {
            script: [
                { src: 'https://fast.wistia.com/embed/medias/j38ihh83m5.jsonp' },
                { src: 'https://fast.wistia.com/assets/external/E-v1.js' }
            ]
        }
    }
}
</script>

<style>

@media only screen and (max-width: 769px) {
    .hero {
        text-align: center;
    }
}

.hero {
    margin-top:28px;
}

.hero .title {
    font-size: 2.5rem;
}

.title, .subtitle {
    color: white;
}

.video-player {
    border-radius: 5px;
    border: 5px solid #333333;
    overflow: hidden;
    width: 320px;
    height: 180px;
    margin:0 auto;
}

.tile.is-ancestor {
    display: flex;
    flex-wrap: wrap;
}
</style>
