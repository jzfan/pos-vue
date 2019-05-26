<template>
    <div id="app">
      <calc-cmp></calc-cmp>
        <div class="action-box">
            <body-cmp></body-cmp>
        </div>
      <cate-cmp></cate-cmp>
    </div>
</template>
<script>
import CalcCmp from './components/Calc'
import CateCmp from './components/Categories'
import BodyCmp from './components/Body'
import bus from './eventBus'
export default {
  components: {CalcCmp, CateCmp, BodyCmp},
    name: 'pos-vue',
    data() {
        return {
            // cid: null,
        }
    },
    created() {
        console.log('created')
    },
    methods: {
    }
}
</script>

<style>
@import '../static/app.css'
</style>
