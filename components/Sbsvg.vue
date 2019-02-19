<template>
    <div class="sbsvg-wrap">
        <img :src="srcstring" :alt="altstring">
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
        },

        altstring(){
            return `a scratch block called ${this.sbid}`
        }
    }
}
</script>
