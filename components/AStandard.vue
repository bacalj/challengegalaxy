<template>
        <tr>
            <th><nuxt-link :to=link>{{ title }}</nuxt-link></th>
            <td v-for="(s, index) in this.standards[standard]" v-bind:key="s.key">
                <i v-if="matchStandard(index)" class="fas fa-check"></i>
            </td>
        </tr>
</template>

<script>
export default {
    data(){
        return { 
            link: "/challenges/" + this.id,
        }
    },
    methods: {
        matchStandard(index) {
            if (this.standards[this.standard] && this.challengeStandards[this.standard]) {
                const standard = this.standards[this.standard][index].id
                return this.challengeStandards[this.standard].indexOf(standard) != -1
            }
        }
    },
    computed: {
        standards(){
            return this.$store.state.standards
        },
    },  
    props:[
        'title',
        'standard',
        'challengeStandards',
        'id'
    ]
}
</script>

<style <style lang="scss" scoped>
    .content table td {
        text-align: center;
        vertical-align: middle;
    }
</style>