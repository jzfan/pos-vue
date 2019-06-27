<template>
  <div class="actions">
    <div>
      <button class="btn btn-cyan" @click="cashTotal">Cash Total</button>
      <button class="btn" @click="orderNumber">Order Number</button>
      <button class="btn btn-red" @click="unchoose">Void</button>
      <button class="btn"></button>
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
    unchoose() {
      this.$store.commit("cancelFood");
    },
    remark(msg) {
      this.$store.commit("remarkItem", msg);
    },
    discount() {
      bus.$emit("discount");
    },
    fee() {
      bus.$emit("fee");
    },
    orderNumber() {
      this.$store.commit("inputing", "orderNumber");
    },
    cashTotal() {
      if (this.$store.state.Order.all.length === 0) {
        return false;
      }
      this.$store.commit("inputing", "pay");
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

