<template>
    <div class="side-bar">
        <button class="btn" @click='orderNumber'>Order Number</button>
        <button class="btn" @click='cashTotal'>Cash Total</button>
        <button class="btn btn-red" @click='unchoose'>Void</button>
    </div>
</template>
<script>
export default {
    methods: {
        unchoose() {
            this.$store.commit('cancelFood')
        },
        cashTotal() {
            if (this.$store.state.Order.all.length === 0) {
                return false
            }
            this.$store.commit('inputing', 'pay')
        },
        orderNumber() {
            this.$store.commit('inputing', 'orderNumber')
        }
    }
}
</script>
<style>
.side-bar {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: inherit;
}

.side-bar>.btn {
    flex: 1;
}
</style>