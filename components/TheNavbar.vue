<template>
<div class="header">
    <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
        
        <div class="navbar-brand">
            <a href="/" class="navbar-item">
                <img src="/pngs/cglogo2.png"><h1 style="display:none;">ChallengeGalaxy</h1>
            </a>
            <a @click="toggleMobileMenu" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': mobileMenuOpen }">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': mobileMenuOpen, 'has-background-dark': true }">
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
    head: {
        htmlAttrs: {
            class: 'has-navbar-fixed-top'
        },
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
        }
    }
}
</script>

<style scoped>
.navbar {
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
}
.navbar-start {
    flex-grow: 1;
    align-self: flex-end;
    justify-content: flex-end;
}
.navbar-burger {
    text-align: center;
    line-height: 78px;
    height: 78px;
}
.clueMenu .text {
    display: inline;
}
.clueMenu.is-active .text {
    display: none;
}
.clueMenu span {
    display: none;
}
.clueMenu.is-active span {
    display: inline-block;
}
.navbar-brand img {
    max-height:4rem;
    margin-right:10px;
}
.navbar-item {
    color: whitesmoke;
}
</style>