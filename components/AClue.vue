<template>
    <div class="clue">
        <div class="framing">
            {{ text }}
        </div>
        <div class="suggested-block">
            <sbsvg :sbid="sbsvg"></sbsvg>
        </div>
    </div>
</template>

<script>
import Sbsvg from '~/components/Sbsvg.vue'

export default {
    components: {
        Sbsvg
    },
    
    props:[
        'text',
        'img',
        'sbsvg'
    ]
}
</script>

<style scoped>
.clue {
    padding:5px;
}
</style>