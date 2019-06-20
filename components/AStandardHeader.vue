<template>
    <th>
        <a :href=this.link>
            <abbr :title=description>
                {{ abbr }}
            </abbr>
        </a>
    </th>
</template>

<script>
export default {
    props:[
        'description',
        'link',
        'abbr',
    ],
}

</script>

<style lang="scss" scoped>
    th {
        font-size: 0.8rem;
        min-width: 4.6rem;
    }
</style>