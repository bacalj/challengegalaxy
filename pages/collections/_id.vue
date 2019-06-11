<template>
    <div class="main">
        <section class="featured section has-background-dark has-text-centered">
            <a name="featured" id="featured"></a>
            <h2 class="title is-2">{{ collectionTitle }} </h2>
            <div class="columns is-multiline" style="color:lightgreen;">
                <a-challenge
                    v-for="challenge in fetchedChallenges"
                    :id="challenge.id"
                    :key="challenge.id">
                </a-challenge>
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
                id: this.$route.params.id,
                fetchedChallenges: []
            }
        },

        computed:{
            collectedIds(){
                return this.$store.state.collections[this.id].challenges;
            },

            collectionTitle(){
                return this.$store.state.collections[this.id].title
            }
        },

        mounted(){
            this.createChallengesArray();
        },

        methods:{
            createChallengesArray(){
                const chalsObj = this.$store.state.en;
                const selects = this.collectedIds;
                for (const key in chalsObj){
                    if ( selects.indexOf(key) > -1 ){
                        this.fetchedChallenges.push(this.$store.state.en[key])
                    };
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
h2 {
    color:white;
}
</style>