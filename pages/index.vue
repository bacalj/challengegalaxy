<template>
    <div>
        <section class="container">
            Welcome to ChallengeGalaxy!
        </section>
        <section class="featured section has-background-info">
            <div class="tile is-ancestor">
                <a-challenge
                    v-for="challenge in featured"
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
    computed: {
        ...mapState({
            featured: state => state.challengeslist.featured,
        }),
    },
}
</script>

<style>
.tile.is-ancestor {
    display: flex;
    flex-wrap: wrap;
}
</style>
