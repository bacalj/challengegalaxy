<template>
<div class="header">
    <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation" :class="{ 'has-box-shadow' : shadowOn }">
        
        <div class="navbar-brand">
            <a href="/" class="navbar-item">
                <img id="cg-main-logo" src="/pngs/cglogo2.png" alt="Challenge Galaxy" :style="{ opacity: iconOpacity }">
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
                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="#" class="dropdown-trigger navbar-link">About</a>

                    <div class="navbar-dropdown has-background-dark">
                        <nuxt-link to="/how-it-works" class="navbar-item">How It Works</nuxt-link>
                        <nuxt-link to="/about" class="navbar-item">The Big Idea</nuxt-link>
                        <nuxt-link to="/standards-alignment" class="navbar-item">Standards</nuxt-link>
                        <nuxt-link to="/contact" class="navbar-item">Contact Us</nuxt-link>
                    </div>
                </div>
                <nuxt-link class="navbar-item" to="/challenges">Challenges</nuxt-link>
                <nuxt-link class="navbar-item" to="/collections/">Collections</nuxt-link>
                <!-- <nuxt-link class="navbar-item" to="/how-it-works"><i class="fas fa-question-circle"></i></nuxt-link> -->
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
            iconOpacity: 0,
            aboutMenuOpen: false,
            shadowOn: false
        }
    },

    methods:{
        toggleMobileMenu(){
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },

        isHome(){
            return this.$route.name == 'index';
        },

        toggleAboutMenu(){
            this.aboutMenuOpen = !this.aboutMenuOpen;
        },

        scrollChanges(event){
            if ( window.scrollY > 650 ){
                this.iconOpacity = 1;
            } else {
                this.iconOpacity = 0;
            }
            
            if ( window.scrollY < 50 ){
                this.shadowOn = false;
            } else {
                this.shadowOn = true;
            }
        }
    },

    mounted(){
        if ( !this.isHome() ){
            this.iconOpacity = 1;
        }

        if ( this.isHome() ){
            window.addEventListener('scroll', this.scrollChanges);
        }
    },

    destroyed(){
        if ( this.isHome() ){
            window.removeEventListener('scroll', this.scrollChanges);
        }
    }
}
</script>

<style scoped>

.navbar {
    transition-property: box-shadow;
    transition-duration: .3s;
}
.navbar.has-box-shadow {
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    z-index: 1001;
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
#cg-main-logo {
    transition-property: opacity;
    transition-duration: .4s;
}
</style>