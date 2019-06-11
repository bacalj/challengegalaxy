<template>
    <div class="column">
        <div class="challenge box">
            <div class="content">
                <h2 class="title">{{ challenge.title }}</h2>
                <p class="subtitle">{{ challenge.goalText }}</p>
                
                <nuxt-link :to="'/challenges/' + challenge.id">
                    <div class="image">
                        <img :src="'https://www.challengegalaxy.com' + challenge.goalImg" alt="">
                    </div>
                    <button class="button is-primary">Try this challenge</button>
                </nuxt-link>

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

.column {
    margin: 5px;
    min-width: 320px;
    max-width: 320px;
    
    .box {
        height:100%;
    }

    .title {
        color: #363636;
        font-size: 1.8rem;
    }

    .subtitle {
        color: #363636;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .image {
        margin-bottom: 20px;
    }
}

</style>


