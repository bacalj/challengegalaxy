<template>
    <div class="main">
        <section class="featured section has-background-dark has-text-centered">
            <a name="featured" id="featured"></a>
            <h1 class="title is-1">Collections</h1>
            <div class="columns">
                <div class="column is-three-fifths is-offset-one-fifth has-text-light">
                    Collections are groups of challenges that go together. 
                </div>
            </div>
            <div class="columns is-multiline">
                <a-collection
                    v-for="(collection,index) in collections"
                    :key="index"
                    :id="collection.id"
                    :title="collection.title"
                    :subtitle="collection.subtitle"
                >
                </a-collection>
            </div>
        </section>
    </div>
</template>

<script>
import ACollection from '~/components/ACollection.vue'

export default {
    components:{
        ACollection
    },

    transition: 'pagechange',
    
    data(){
        return {
            collections: this.collections = this.$store.state.collections.collectionslist.published
        }
    }
}
</script>

<style lang="scss" scoped>
h1 { color:white; }

.columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>