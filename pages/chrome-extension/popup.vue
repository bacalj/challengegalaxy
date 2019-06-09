<template>
  <div>
    <section class="logo has-background-dark has-text-centered">
        <img src="https://www.challengegalaxy.com/pngs/cglogo2.png"/>
    </section>
    
    <section class="featured section has-background-dark has-text-centered">
        <div class="columns is-multiline">
            <a-challenge
                v-for="challenge in challenges"
                :id="challenge.id"
                :key="challenge.id">
            </a-challenge>
        </div>
    </section>

    <div class="footer">
      <h2>About Challenge Galaxy</h2>
      <p>Find out more about Challenge Galaxy and additional curriculum materials at <a href="https://www.challengegalaxy.com" target="_blank">challengegalaxy.com</a>.</p>
      
      <p>Thanks to the <a href="http://communityfoundation.org/" target="_blank">Community Foundation of Western Massachusetts</a> for supporting this project. Code is licensed <a href="http://opensource.org/licenses/mit-license.php " target="_blank">MIT</a> open source license. Content is licensed <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY NC SA 4.0.</a></p>
    </div>
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
    }
    .subtitle {
      font-size: 1rem;
      margin: 10px 0;
    }
    .column {
      max-width: 370px;
    }
    .button {
      margin-top: 10px;
    }
    .footer {
      padding: 5px 20px;
      background-color:#363636;
      color: rgba(255, 255, 255, 0.8);

      h2 {
        font-family: 'Raleway', sans-serif;
        color: #ffffff;
        font-size: 1.6rem;
      }
      a, a:hover {
        color: $green;
      }
      a:hover {
        text-decoration:underline;
      }
    }
</style>