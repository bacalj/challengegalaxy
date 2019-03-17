<template>
    <div class="tile challenge box">
        <div class="content">
            <p class="title">{{ challenge.title }}</p>
            <p class="subtitle">{{ challenge.goalText }}</p>
            <img :src="challenge.goalImg">
            <nuxt-link :to="'/challenges/' + challenge.id" class="button is-primary" >
            Try this challenge</nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        challenge(){
            return this.$store.state.en[this.id]
        },
    },
    props:[
        'id'
    ]
}
</script>
<style lang="scss" scoped>
.tile {
    margin: 5px;
    min-width: 320px;
    max-width: 480px;
}
@media only screen and (max-width: 683px) {
    .tile {
        margin: 20px auto;
    }
}
.challenge .button {
    display: block;
    margin: auto;
    width: 10rem;
}
</style>


