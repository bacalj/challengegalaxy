<template>
  <div>
    <section class="logo has-background-dark has-text-centered">
        <img src="/pngs/cglogo2.png"/>
    </section>
    
    <section class="intro section has-background-dark">
      <p>Challenge Galaxy helps people learn Scratch through problem solving and experimentation with just the right amount of help. Find out more about Challenge Galaxy at <a href="https://www.challengegalaxy.com" target="_blank">challengegalaxy.com</a>.</p>
    </section>

    <section class="featured section has-background-dark has-text-centered">
        <h3 class="title is-3">Find a Challenge</h3>
        <i class="fas fa-chevron-down"></i>
        <div class="columns is-multiline">
            <a-challenge
                v-for="challenge in challenges"
                :id="challenge.id"
                :key="challenge.id">
            </a-challenge>
        </div>
    </section>

    <script src="../popup.js"></script>
  </div>
</template>
<script>
import AChallenge from '~/components/AChallenge.vue'
import { mapState } from 'vuex'

export default {
    layout: 'extension',
    components:{
        AChallenge,
    },
    computed: {
        ...mapState({
            challenges: state => state.challengeslist.published,
        }),
    },
}
</script>
<style lang="scss">
body {
  margin: 0px;
  max-height: 400px;
  width: 400px;
  max-width: 100%;
  padding: 0px;
}
.logo {
  padding: 10px;
}
.logo img {
  max-width: 100%;
}
.title {
  font-size: 1.4rem;
  margin: 0;
  color: white;
}
.section .column {
  max-width: 370px;
}
.button {
  margin-top: 10px;
}
.intro {
  color: white;
  padding: 1.5rem;

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
}
i {
    font-size: 48px;
    color: white;
    margin-bottom: 1.5rem;
}
</style>