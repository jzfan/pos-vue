<template>
  <div id="app">
    <header-cmp></header-cmp>
    <body-cmp v-if="!showTextModal"></body-cmp>
    <text-modal v-else></text-modal>
    <cate-cmp></cate-cmp>
  </div>
</template>
<script>
import HeaderCmp from "./components/Header";
import CateCmp from "./components/Categories";
import BodyCmp from "./components/Body";
import TextModal from "./components/TextModal";
import bus from "./eventBus";
export default {
  components: { HeaderCmp, CateCmp, BodyCmp, TextModal },
  name: "pos-vue",
  data() {
    return {
      // cid: null,
      showTextModal: false
    };
  },
  created() {
    this.$http.get("/categories").then(res => {
      this.$store.commit("setCategories", res.data);
    });
    this.$http.get("/foods").then(res => {
      let foods = res.data.map(food => {
        food.qty = 1;
        food.remark = "";
        return food;
      });
      this.$store.commit("setFoods", foods);
    });

    bus.$on("text", () => {
      this.showTextModal = !this.showTextModal;
    });
    bus.$on("cancelText", () => {
      this.showTextModal = false;
    });
  },
  methods: {}
};
</script>
<style>
@import "../static/app.css";
</style>