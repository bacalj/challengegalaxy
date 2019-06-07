<template>
    <div>
        <section class="featured section has-background-dark has-text-centered">
            <a name="featured" id="featured"></a>
            <h2 class="title is-2">Collection: {{ id }} </h2>
            <div class="columns is-multiline" style="color:lightgreen;">
                     
                <!-- <a-challenge
                    v-for="challenge in challenges"
                    :id="challenge.id"
                    :key="challenge.id">
                </a-challenge> -->
                {{ challenges }}
            </div>
        </section>
    </div>
</template>

<script>
import AChallenge from '~/components/AChallenge.vue'
import { mapState } from 'vuex'
    export default {
        components:{
            AChallenge
        },

        data(){
            return {
                id: this.$route.params.id
            }
        },

        computed:{
            challenges(){
                return this.$store.state.collections[this.id].challenges;
            }
        }
    }
</script>

<style lang="scss" scoped>
h2 {
    color:white;
}
</style>