<template>
  <div class="actions">
    <div>
      <button class="btn btn-cyan" @click="text">Text</button>
      <button class="btn btn-red" @click="refund">Refund</button>
      <button class="btn btn-cyan" @click="special">Special</button>
      <button class="btn btn-cyan"></button>
    </div>
    <div>
      <button class="btn btn-green" @click="remark('take away')">T/A</button>
      <button class="btn btn-blue" @click="discount">Discount</button>
      <button class="btn btn-pink" @click="fee">Fee</button>
      <button class="btn btn-cyan"></button>
    </div>
  </div>
</template>

<script>
import bus from "../eventBus";
export default {
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
      this.$store.commit("textAction", "special");
      // bus.$emit("text", "special");
    },
    text() {
      this.$store.commit("textAction", "remark");
      // bus.$emit("text", "remark");
    },
    refund() {
      bus.$emit("text", "refund");
      //   window.print();
    }
  }
};
</script>

<style>
.actions {
  flex: 2;
  display: flex;
}

.actions > div {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.actions .btn {
  flex: 1;
}
</style>

