<template>
  <div class="calc" @click="numberClick">
    <div class="calc-row">
      <button class="btn">7</button>
      <button class="btn">8</button>
      <button class="btn">9</button>
      <button class="btn h4" @click.stop="clear">CL</button>
    </div>
    <div class="calc-row">
      <button class="btn">4</button>
      <button class="btn">5</button>
      <button class="btn">6</button>
      <button class="btn h4" @click.stop="noSale">NO SALE</button>
    </div>
    <div class="calc-row">
      <button class="btn">1</button>
      <button class="btn">2</button>
      <button class="btn">3</button>
      <button class="btn" @click.stop="times">X</button>
    </div>
    <div class="calc-row">
      <button class="btn">0</button>
      <button class="btn">.</button>
      <button class="btn btn-enter" @click.stop="enter">ENTER</button>
    </div>
  </div>
</template>
<script>
import bus from "../eventBus";
export default {
  methods: {
    enter() {
      this.$store.commit("enter");
    },
    numberClick(e) {
      if (this.$store.state.Text.action !== null) {
        bus.$emit("textNumber", e.target.innerHTML);
        return;
      }
      if (this.$store.state.Calc.status === null) {
        this.$store.commit("orderQty", e.target.innerHTML);
        return false;
      }
      this.$store.commit("numberInput", e.target.innerHTML);
    },
    times() {},
    noSale() {},
    clear() {}
  }
};
</script>
<style>
</style>