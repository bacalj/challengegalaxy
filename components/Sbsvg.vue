<template>
    <div>
        <img :src="srcstring" alt="image of a scratch block">
    </div>
</template>

<script>
export default {
    props: {
        sbid: String
    },

    computed:{
        srcstring(){
            return `/scratchblocksvgs/${this.sbid}.svg`
        }
    }
}
</script>
