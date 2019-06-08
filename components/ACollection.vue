<template>
    <div class="column">
        <div class="collection box">
            <div class="content">
                <p class="title">{{ title }}</p>
                <p class="subtitle">{{ subtitle }}</p>

            </div>
           <nuxt-link 
                :to="'/collections/' + id "
                class="button is-primary">
                    Go to Collection
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            'id',
            'title',
            'subtitle'
        ]
    }
</script>

<style lang="scss" scoped>

</style>