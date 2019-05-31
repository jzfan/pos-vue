<template>
    <div class="side-bar">
        <button class="btn" @click='cashTotal'>Cash Total</button>
        <button class="btn" @click='unchoose'>DELETE</button>
        <button class="btn">abc</button>
    </div>
</template>
<script>
import bus from '../eventBus'
export default {
    methods: {
        unchoose() {
            this.$store.commit('cancelFood')
        },
        cashTotal() {
            if (this.$store.state.Order.all.length === 0) {
                return false
            }
            this.$store.commit('receive_inputing')
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