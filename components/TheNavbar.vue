<template>
<div class="header">
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <!-- <img src="/pngs/cglogo.png"> -->
                <h1>ChallengeGalaxy</h1>
            </a>
            <a @click="toggleMobileMenu" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': mobileMenuOpen }">
            <div class="navbar-start">
         
            </div>
            <div class="navbar-end">
                <!-- <a href="" class="navbar-item">About</a> -->
                <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
                <div class="navbar-item has-dropdown is-hoverable">
                    <nuxt-link to="/challenges" class="navbar-link">Challenges</nuxt-link>
                    <div class="navbar-dropdown">

                        <nuxt-link class="navbar-item"
                            v-for="challenge in this.$store.state.challengeslist.published" 
                            :to="challenge.link"
                            :key="challenge.id"
                        >{{challenge.title}}
                        </nuxt-link>
                    </div>
                </div>
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
.header {
    background-color: #209cee;
}
.navbar {
    max-width: 640px;
    margin: 0 auto;
}
.navbar-brand img {
    height: 90px;
}
</style>