<template>
<div class="header">
    <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
        
        <div class="navbar-brand">
            <a href="/" class="navbar-item">
                <img src="/pngs/scratchcatspace2.png"><h1>ChallengeGalaxy</h1>
            </a>
            <a @click="toggleClueMenu" role="button" class="navbar-burger clueMenu" aria-label="menu" aria-expanded="false" :class="{ 'is-active': clueMenuOpen }">
                Clues
            </a>
            <a @click="toggleMobileMenu" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': mobileMenuOpen }">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': clueMenuOpen, 'has-background-dark': true }">
            <div class="navbar-start">
                <LevelSlider />
            </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': mobileMenuOpen }">
            <div class="navbar-start">

            </div>
            <div class="navbar-end">
                <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
                <nuxt-link class="navbar-item" to="/challenges">Challenges</nuxt-link>
            </div>
        </div>
    </nav>
</div>

</template>

<script>
import LevelSlider from '~/components/LevelSlider.vue'

export default {

    components:{
        LevelSlider
    },

    data(){
        return {
            mobileMenuOpen:false,
            clueMenuOpen: false,
        }
    },
    methods:{
        toggleMobileMenu(){
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        toggleClueMenu(){
            this.clueMenuOpen = !this.clueMenuOpen;
        }
    }
}
</script>

<style scoped>
.navbar-start {
    flex-grow: 1;
    align-self: flex-end;
    justify-content: flex-end;
}
.clueMenu {
    text-align: center;
    line-height: 3rem;
}
</style>