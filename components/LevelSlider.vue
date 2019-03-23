<template>
    <div class="level-slider">
        <div class="zero-label label">No Clues</div>
        <input 
            type="range" 
            min=0
            max=4
            steps=1
            v-model="cluesLevel"
            v-on:input="setLevelInStore"
        >
        <div class="all-label label">All Clues</div>
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
    transform: rotateZ(180deg);
    top:3px;
    right:30%;
    z-index:1001;
}

div.label {
    color:#efefef;
    width:80px;
    z-index:1002;
}

div.label.zero-label {
    /* //border:1px solid red; */
    transform: rotateZ(180deg) translateX(100px) translateY(-34px);
}

div.label.all-label {
    /* //border:1px solid green; */
    transform: rotateZ(180deg) translateX(-140px) translateY(20px);
}

</style>