<template>
  <div class="header-box">
    <display-cmp></display-cmp>
    <calc-cmp></calc-cmp>
    <div class="remakrs">
      <div>
        <button class="btn btn-cyan" @click="text">Text</button>
        <button class="btn btn-red" @click="refund">Refund</button>
        <button class="btn btn-cyan" @click="special">Special</button>
        <button class="btn btn-cyan" @click="special">Special</button>
      </div>
      <div>
        <button class="btn btn-green" @click="remark('take away')">T/A</button>
        <button class="btn btn-blue" @click="discount">Discount</button>
        <button class="btn btn-pink" @click="fee">Fee</button>
        <button class="btn btn-cyan" @click="special">Special</button>
      </div>
    </div>
  </div>
</template>
<script>
import displayCmp from "./Display";
import calcCmp from "./Calc";
import bus from "../eventBus";
export default {
  components: {
    displayCmp,
    calcCmp
  },
  methods: {
    remark(msg) {
      this.$store.commit("remarkItem", msg);
    },
    discount() {
      bus.$emit("discount");
    },
    fee() {
      bus.$emit("fee");
    },
    special() {
      this.$store.commit("inputSpecial");
      // bus.$emit('special')
    },
    text() {
      bus.$emit("text");
    },
    refund() {
      window.print();
    }
  }
};
</script>
<style>
.remakrs {
  flex: 2;
  display: flex;
}

.remakrs > div {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.remakrs .btn {
  flex: 1;
}
</style>