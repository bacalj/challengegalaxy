<template>
    <div>
        <section class="featured section has-background-dark has-text-centered">
            <a name="featured" id="featured"></a>
            <h2 class="title is-2">Find a Collection</h2>
            <div class="columns">
                <div class="column is-three-fifths is-offset-one-fifth has-text-light">
                    Collections are groups of challenges that go together. 
                </div>
            </div>
            <div class="columns is-multiline">
                <a-collection
                    v-for="collection in collections"
                    :id="collection.id"
                    :title="collection.title"
                    :key="collection.id">
                </a-collection>
            </div>
        </section>
    </div>
</template>

<script>
import ACollection from '~/components/ACollection.vue'
import { mapState } from 'vuex'
export default {
    components:{
        ACollection
    },

    computed: {
        ...mapState({
            collections: state => state.collections.collectionslist.published
        }),
    },
}
</script>

<style lang="scss" scoped>
h2 { color:white; }
</style>