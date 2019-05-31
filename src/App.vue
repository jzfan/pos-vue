<template>
    <div id="app">
        <header-cmp></header-cmp>
        <body-cmp></body-cmp>
        <cate-cmp></cate-cmp>
    </div>
</template>
<script>
import HeaderCmp from './components/Header'
import CateCmp from './components/Categories'
import BodyCmp from './components/Body'
import bus from './eventBus'
export default {
    components: { HeaderCmp, CateCmp, BodyCmp },
    name: 'pos-vue',
    data() {
        return {
            // cid: null,
        }
    },
    created() {
        this.$http.get('/categories')
            .then(res => {
                this.$store.commit('setCategories', res.data)
        })
        this.$http.get('/foods')
            .then(res => {
                let foods = res.data.map((food) => {
                    food.qty = 1
                    food.remark = ''
                    return food
                })
                this.$store.commit('setFoods', foods)
        })
    },
    methods: {}
}
</script>
<style>
@import '../static/app.css'
</style>