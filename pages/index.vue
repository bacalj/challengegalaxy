<template>
    <div>
        <section class="hero is-dark is-fullheight">
            <div class="hero-head">
                <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a @click="toggleHomeMobileMenu" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': homeMobileMenuOpen }">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div class="navbar-menu" :class="{ 'is-active': homeMobileMenuOpen, 'has-background-dark': true }">
                        <div class="navbar-start">

                        </div>
                        <div class="navbar-end">
                            <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
                            <nuxt-link class="navbar-item" to="/challenges">Challenges</nuxt-link>
                            <nuxt-link class="navbar-item" to="/collections/">Collections</nuxt-link>
                        </div>
                    </div>
                </nav>
            </div>
            <TheHero />
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
</template>

<script>
import AChallenge from '~/components/AChallenge.vue'
import { mapState } from 'vuex'
import TheNavbar from '~/components/TheNavbar.vue'
import TheHero from '~/components/TheHero.vue'

export default {
    layout: 'home',

    components:{
        TheHero,
        AChallenge
    },
    
    computed: {
        ...mapState({
            featured: state => state.challengeslist.featured,
        }),

        showTheFallingStars(){
            return this.$store.state.prefs.localprefs.fallingStars;
        }
    },

    data(){
        return {
            homeMobileMenuOpen:false
        }
    },

    head () {
        return {
            script: [
                { src: 'https://fast.wistia.com/embed/medias/ce9988zz4y.jsonp' },
                { src: 'https://fast.wistia.com/assets/external/E-v1.js' }
            ]
        }
    },

    methods:{
        toggleHomeMobileMenu(){
            this.homeMobileMenuOpen = !this.homeMobileMenuOpen;
        }
    },

}
</script>

<style lang="scss">

@media only screen and (max-width: 769px) {
    .hero {
        text-align: center;
    }
}

.hero .title {
    font-size: 2.5rem;
}

.title, .subtitle {
    color: white;
}

.tile.is-ancestor {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.layout-enter-active,
.layout-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 200ms;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
</style>
