<template>
  <div class="side-bar">
    <button class="btn btn-cyan" @click="text">Text</button>
    <button class="btn btn-cyan" @click="special">Special</button>
    <button class="btn btn-red" @click="refund">Refund</button>
  </div>
</template>
<script>
export default {
  methods: {
    text() {
      this.$store.commit("textAction", "remark");
      // bus.$emit("text", "remark");
    },
    cashTotal() {
      if (this.$store.state.Order.all.length === 0) {
        return false;
      }
      this.$store.commit("inputing", "pay");
    },
    orderNumber() {
      this.$store.commit("inputing", "orderNumber");
    },
    special() {
      this.$store.commit("textAction", "special");
      // bus.$emit("text", "special");
    },
    refund() {
      bus.$emit("text", "refund");
      //   window.print();
    }
  }
};
</script>
<style>
.side-bar {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: inherit;
}

.side-bar > .btn {
  flex: 1;
}
</style>