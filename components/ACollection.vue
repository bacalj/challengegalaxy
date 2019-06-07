<template>
    <div>
        <div class="collection">
           <nuxt-link :to="'/collections/' + id ">{{title}}</nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            'id',
            'title'
        ]
    }
</script>

<style lang="scss" scoped>

.collection {
    color:white !important;
    border:1px solid white;
}
</style>