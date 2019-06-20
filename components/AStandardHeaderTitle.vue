<template>
    <th> {{ title }} </th>
</template>

<script>
export default {
    props:[
        'title'
    ],
}

</script>

<style lang="scss" scoped>
    .table .titles th { 
        color: white;
        font-size: 0.7rem;
    }
</style>