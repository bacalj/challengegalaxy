<template>
  <div class="has-background-dark">
    <nuxt />
  </div>
</template>

<script>
export default {
     components:{
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
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
.button.is-primary:hover {
  background-color: #9115fc;
  background-image: -webkit-gradient( linear, left top, right top, color-stop(0,#9115fc), color-stop(1, #c568da) );
  background-image: gradient( linear, left top, right top, color-stop(0, #9115fc), color-stop(1, #c568da) );
}
.button.is-primary {
  background-color: #8204f0;
  background-image: -webkit-gradient( linear, left top, right top, color-stop(0,#8204f0), color-stop(1, #a037fc) );
  background-image: gradient( linear, left top, right top, color-stop(0, #8204f0), color-stop(1, #a037fc) );
}
body {
    background-color:whitesmoke;
}
</style>
