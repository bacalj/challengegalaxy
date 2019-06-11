<template>
  <div class="site has-background-dark">
    <TheNavbar />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheNavbar from '~/components/TheNavbar.vue'

if (process.client){
    var scratchblocks = require('scratchblocks')
}

export default {
     components:{
        TheNavbar,
        TheFooter
    }
}
</script>


<style lang="scss">
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
// Make footer at bottom if page is short
.site {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.main {
  flex: 1;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.has-background-dark { 
  a {
    background-image: -webkit-gradient( linear, left top, right top, color-stop(0,#9115fc), color-stop(0.6, #c568da) );
    background-image: gradient( linear, left top, right top, color-stop(0, #9115fc), color-stop(0.6, #c568da) );
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
    transition: 0.5s;
  }
   a:hover {
    background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
    background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
    text-decoration: underline;
    color: transparent;
    transition: 0.5s;
  }
}
a.button {
    -webkit-background-clip: unset;
    background-clip: unset;
    background-image: unset;
}
a.button:hover {
  background-image: unset;  
  text-decoration: none;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
