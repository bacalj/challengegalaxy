<template>
    <div>
        <section class="featured section has-background-dark has-text-centered">
            <a name="featured" id="featured"></a>
            <h1 class="title is-1">Find a Challenge</h1>
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
    computed: {
        ...mapState({
            challenges: state => state.challengeslist.published,
        }),
    },
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