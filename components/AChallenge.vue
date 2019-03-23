<template>
    <div class="column">
        <div class="challenge box">
            <div class="content">
                <p class="title">{{ challenge.title }}</p>
                <p class="subtitle">{{ challenge.goalText }}</p>
                <figure class="image">
                    <img :src="challenge.goalImg">
                </figure>
                <nuxt-link :to="'/challenges/' + challenge.id" class="button is-primary" >
                Try this challenge</nuxt-link>
            </div>
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
    .title {
        color: #363636;
        font-size: 1.8rem;
    }
    .subtitle {
        color: #363636;
    }
    .challenge .button {
        display: block;
        margin: auto;
        width: 10rem;
    }
}

.column .challenge.box {
    height:100%;
}
@media only screen and (max-width: 683px) {
    .tile {
        margin: 20px auto;
    }
}
</style>


