<template>
<div class="header">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        
        <div class="navbar-brand">
            <a href="/" class="navbar-item">
                <img src="/pngs/scratchcatspace2.png"><h1>ChallengeGalaxy</h1>
            </a>
            <a @click="toggleMobileMenu" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': mobileMenuOpen }">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
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
export default {
    data(){
        return {
            mobileMenuOpen:false
        }
    },

    methods:{
        toggleMobileMenu(){
            this.mobileMenuOpen = !this.mobileMenuOpen;
        }
    }
}
</script>

<style scoped>

</style>