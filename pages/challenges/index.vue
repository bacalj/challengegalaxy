<template>
    <div>
        <section class="featured section has-background-dark has-text-centered">
            <a name="featured" id="featured"></a>
            <h1 class="title is-1">Find a Challenge</h1>
            <section class="section selects">
                <!-- <div class="select">
                    <select v-model="levelFilterVal">
                        <option value="All Levels">All Levels</option>
                        <option value="0">Just Starting</option>
                        <option value="1">Some Experience</option>
                        <option value="2">Lots of Experience</option>
                    </select>
                </div> -->
                <div class="select">
                    <select v-model="collectionFilterVal">
                        <option value="All Challenges">All Challenges</option>
                        <option 
                            v-for="collection in collections" 
                            :key="collection.id"
                            :value="collection.id">
                            {{ collection.title }}
                        </option>
                    </select>
                </div>
                <div class="sorting">
                    <div>Sort by</div>
                    <div class="control">
                        <span class="sortLabel">Name</span>
                        <input type="radio" id="alpha" value="alpha" v-model="sortBy" checked>
                        <label for="alpha"><i class="fas fa-sort-alpha-down"></i></label>
                        <input type="radio" id="alphaReversed" value="alphaReversed" v-model="sortBy">
                        <label for="alphaReversed"><i class="fas fa-sort-alpha-up-alt"></i></label>
                    </div>
                    <div class="control">
                        <span class="sortLabel">Steps</span>
                        <input type="radio" id="easyFirst" value="easyFirst" v-model="sortBy">
                        <label for="easyFirst"><i class="fas fa-sort-amount-down-alt"></i></label>
                        <input type="radio" id="hardFirst" value="hardFirst" v-model="sortBy">
                        <label for="hardFirst"><i class="fas fa-sort-amount-up"></i></label>
                    </div>
                </div>
            </section>

            <div class="columns is-multiline">
                <a-challenge
                    v-for="challenge in challengesToRender"
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
            collectionFilterVal: 'All Challenges',
            sortBy: 'alpha'
        }
    },

    computed: {
        ...mapState({
            collections: state => state.collections.collectionslist.published,
            allchallenges: state => state.challengeslist.published
        }),

        challengesToRender(){
            switch (this.sortBy) {
                case 'easyFirst':
                    this.$store.commit('sortChallengesByNumSteps')
                    break
                case 'hardFirst':
                    this.$store.commit('sortChallengesByNumStepsReversed')
                    break
                case 'alphaReversed':
                    this.$store.commit('sortChallengesByTitleReversed')
                    break
                default:
                    this.$store.commit('sortChallengesByTitle')
            }
            if ( this.collectionFilterVal == "All Challenges"){
                return this.allchallenges;
            } else {
                const foundChals = this.$store.state.collections[this.collectionFilterVal].challenges
                return this.$store.getters.getChallenges(foundChals);
            }
        }
    },

    created(){
        this.$store.commit('sortChallengesByTitle');
    }
}
</script>

<style scoped>
.title, .subtitle, .control {
    color: white;
}
.control {
    color: #7c7c7c;
}
.control input { 
    display: none;
}
.control input:checked + label {
    color: white;

}
.columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.selects {
    color: white;
    display: flex;
    justify-content: center;
}
.sortLabel {
    display:inline-block;
}
.sortLabel:nth-child(1) {
    margin-left: 15px;
}
@media only screen and (max-width: 450px) {
    .control {
        margin-left: 0;
    }
}
.select, .sorting {
    margin:6px;
}

.select {
    position: relative;
    top:7px;
    left:-4px;
}
</style>