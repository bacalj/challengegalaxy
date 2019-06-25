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
                    v-for="challenge in challenges"
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
            collectionFilterVal: 'All Collections'
        }
    },

    watch: {
        levelFilterVal(){
            this.applyTheFilters();
        },

        collectionFilterVal(){
            this.applyTheFilters();
        }
    },
       

    computed: {
        ...mapState({
            challenges: state => state.challengeslist.published,
            collections: state => state.collections.collectionslist.published
        })
    },

    methods: {
        sortByTitle(){
            this.$store.commit('sortChallengesByTitle');
        },

        applyTheFilters(){
            const level = this.levelFilterVal;
            const collecto = this.collectionFilterVal;
            this.$store.commit('applyFilters',  
                { 
                    level: level,
                    collecto: collecto
                } 
            );
        }
    },

    created(){
        this.sortByTitle();
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