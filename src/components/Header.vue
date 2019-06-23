<template>
  <div class="header-box">
    <display-cmp></display-cmp>
    <calc-cmp></calc-cmp>
    <actions-cmp></actions-cmp>
  </div>
</template>
<script>
import displayCmp from "./Display";
import calcCmp from "./Calc";
import actionsCmp from "./Actions";
export default {
  components: {
    displayCmp,
    actionsCmp,
    calcCmp
  }
};
</script>