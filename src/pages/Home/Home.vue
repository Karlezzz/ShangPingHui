<template>
    <div>
        <TypeNav></TypeNav>
        <List></List>
        <Today></Today>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Floor></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
    import List from './ListContainer/List.vue'
    import Today from './Today/Today.vue'
    import Rank from './Rank/Rank.vue'
    import Like from './Like/Like.vue'
    import Floor from './Floor/Floor.vue';
    import Brand from './Brand/Brand.vue'
    export default {
        name: 'Home',
        components: {
            List,
            Today,
            Rank,
            Like,
            Floor,
            Brand
        }
    }
</script>

<style>

</style>