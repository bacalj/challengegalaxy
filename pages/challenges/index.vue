<template>
    <div>
        <section class="featured section has-background-dark has-text-centered">
            <a name="featured" id="featured"></a>
            <h1 class="title is-1">Find a Challenge</h1>
            <div class="selects">
                <div class="select">
                    <select v-model="levelFilterVal">
                        <option value="All Levels">All Levels</option>
                        <option>Just Starting</option>
                        <option>Some Experience</option>
                        <option>Lots of Experience</option>
                    </select>
                </div>
            
                <div class="select">
                    <select v-model="collectionFilterVal">
                        <option value="All Collections">All Collections</option>
                        <option :value="collection.title" :key="collection.id" v-for="collection in collectionOptions">{{ collection.title }}</option>
                    </select>
                </div>
            </div>
            <button @click="applyTheFilters">apply them filters</button>
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
import { mapState } from 'vuex'

export default {
    components:{
        AChallenge,
    },
    
    transition: 'pagechange',
    
    data(){
        return {
            levelFilterVal: 'All Levels',
            collectionFilterVal: 'All Collections',
            collectionOptions: this.$store.state.collections.collectionslist.published
        }
    },

    computed: {
        ...mapState({
            challenges: state => state.challengeslist.published,
            collections: state => state.collections.collectionslist.published
        }),
    },

    methods: {
        sortByTitle(){
            this.$store.commit('sortChallengesByTitle');
        },

        applyTheFilters(){
            this.$store.commit('applyFilters', this.levelFilterVal, this.collectionFilterVal);
        }
    },

    mounted(){
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