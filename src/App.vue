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
        console.log('created')
        // console.log(this.$store.state.Counter.main)
    },
    methods: {}
}
</script>
<style>
@import '../static/app.css'
</style>