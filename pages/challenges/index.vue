<template>
    <div>
        <section class="featured section has-background-dark has-text-centered">
            <a name="featured" id="featured"></a>
            <h1 class="title is-1">Find a Challenge</h1>
            <div class="selects">
                <div class="select">
                    <select v-model="levelFilterVal">
                        <option value="All Levels">All Levels</option>
                        <option value="0">Just Starting</option>
                        <option value="1">Some Experience</option>
                        <option value="2">Lots of Experience</option>
                    </select>
                </div>
            
                <div class="select">
                    <select v-model="collectionFilterVal">
                        <option value="All Collections">All Collections</option>
                        <option 
                            v-for="collection in collections" 
                            :key="collection.id"
                            :value="collection.id">
                            {{ collection.title }}
                        </option>
                    </select>
                </div>
            </div>
           
            <div class="columns is-multiline">
                <a-challenge
                    v-for="challenge in gotZ"
                    :id="challenge.id"
                    :key="challenge.id">
                </a-challenge>
            </div>

        </section>
    </div>
</template>

<script>
import AChallenge from '~/components/AChallenge.vue'
import { mapState, mapGetters } from 'vuex'

export default {
    components:{
        AChallenge,
    },
    
    transition: 'pagechange',
    
    data(){
        return {
            levelFilterVal: 'All Levels',
            collectionFilterVal: 'scratch-basics'
        }
    },

    computed: {
        ...mapState({
            collections: state => state.collections.collectionslist.published,
            challenges: state => state.challengeslist.published
        }),

        gotZ() {
            const foundChals = this.$store.state.collections[this.collectionFilterVal].challenges
            return this.$store.getters.gotChals(foundChals);
        }
    },

    methods: {
        renderChals(){
            this.$store.commit('sortFilterRenderChals',{
                colecto: this.collectionFilterVal
            });
        }
    },

    watch:{
        collectionFilterVal(){
           // this.renderChals();
        }
    },

    created(){
        //this.renderChals();
    }
}
</script>

<style scoped>
.title, .subtitle {
    color: white;
}
.columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>