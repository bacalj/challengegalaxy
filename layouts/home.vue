<template>
  <div class="has-background-dark">
    <TheNavbar />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheNavbar from '~/components/TheNavbar.vue'

export default {
     components:{
        TheNavbar,
        TheFooter
    }
}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html.has-navbar-fixed-top {
  padding-top: 80px !important;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
path.sb3-obsolete {
    fill: #ff6680;
    stroke: #ff3355;
}

body {
    background: #4a4a4a;
}
</style>
