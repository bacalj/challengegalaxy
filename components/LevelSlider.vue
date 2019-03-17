<template>
    <div class="level-slider">
        <label class="zero-label">No Clues</label>
        <input 
            type="range" 
            min=0
            max=4
            steps=1
            v-model="cluesLevel"
            v-on:input="setLevelInStore"
        >
        <label class="all-label">All Clues</label>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                cluesLevel: 0
            }
        },

        methods:{
            setLevelInStore(){
                this.$store.commit('prefs/localprefs/setLevel', this.cluesLevel);
            }
        },

        mounted(){
            this.cluesLevel = this.$store.state.prefs.localprefs.levelSetTo;
        }
    }
</script>

<style scoped>
.level-slider {
    position: fixed;
    transform: rotateZ(270deg);
    top:342px;
    right:17px;
}

label {
    transform: rotateX(370deg);
}

</style>