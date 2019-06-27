<template>
  <div class="body-box">
    <foods-cmp></foods-cmp>
    <right-cmp></right-cmp>
  </div>
</template>
<script>
import FoodsCmp from "./Foods";
import RightCmp from "./Right";
export default {
  components: {
    FoodsCmp,
    RightCmp
  }
};
</script>
<style>
.body-box {
  flex: 5;
  display: flex;
  height: 100%;
}
</style>