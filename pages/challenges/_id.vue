<template>
    <div>
        <h1>{{ challenge.title }}</h1>
        <a-clue 
            v-for="clue in clues" 
            :img="clue.img"
            :text="clue.text" 
            :key="clue.id">
        </a-clue>
    </div>
</template>

<script>
import AClue from '~/components/AClue.vue'

export default {
    components:{
        AClue,
    },

    data(){
        return {
            id: this.$route.params.id,
            lang: 'en',
            availLangs: this.$store.state.availLangs
        }
    },

    computed:{
        challenge(){
            return this.$store.state[this.lang][this.id]
        },

        clues(){
            return this.challenge.clues
        }
    },

    mounted(){
        /* if we have a translation, load it, else english */
        if (this.$store.state.langs.includes(this.$route.query.lang)){
            this.lang = this.$route.query.lang;
        } 
    }
}
</script>
            
<style scoped>
</style>