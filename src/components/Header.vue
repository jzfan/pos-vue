<template>
    <div class="header-box">
        <display-cmp></display-cmp>
        <calc-cmp></calc-cmp>
        <div class="remakrs">
            <button class="btn btn-red" @click='remark("take away")'>T/A</button>
            <button class="btn btn-blue" @click='discount'>Discount</button>
            <button class="btn btn-pink" @click='fee'>Fee</button>
            <button class="btn btn-cyan" @click='special'>Special</button>
        </div>
    </div>
</template>
<script>
import displayCmp from './Display'
import calcCmp from './Calc'
import bus from '../eventBus'
export default {
    components: {
        displayCmp,
        calcCmp
    },
    methods: {
        remark(msg) {
            this.$store.commit('remarkItem', msg)
        },
        discount() {
            bus.$emit('discount')
        },
        fee() {
            bus.$emit('fee')
        }
    }
}
</script>
<style>
.remakrs {
    flex: 2;
    display: flex;
    flex-direction: column;
}

.remakrs>.btn {
    flex: 1;
}
</style>