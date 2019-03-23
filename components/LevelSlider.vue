<template>
    <div class="level-menu">
        <div class="level-slider">
            <div class="zero-label label">None</div>
            <input 
                type="range" 
                min=0
                max=4
                steps=1
                v-model="cluesLevel"
                v-on:input="setLevelInStore"
            >
            <div class="all-label label">All</div>
        </div>
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
.level-menu {
    text-align: center;
    color: #333333;
}
.level-slider input {
    width: 4rem;
}
.label {
    display: inline-block;
    z-index:1002;
    color: whitesmoke;
}

</style>