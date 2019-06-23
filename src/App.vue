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
      // showTextModal: false
    };
  },
  computed: {
    showTextModal: {
      get() {
        return this.$store.state.Text.action !== null;
      },
      set() {}
    }
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
    const buttonStyleHandler = e => {
      if (e.target.nodeName === "BUTTON") {
        let btn = document.getElementsByClassName("btn-active")[0];
        if (typeof btn !== "undefined") {
          btn.className = btn.className.replace(" btn-active", "");
        }
        e.target.className += " " + "btn-active";
      }
    };
    document.addEventListener("click", buttonStyleHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("click", buttonStyleHandler);
    });
  },
  methods: {}
};
</script>
<style>
@import "../static/app.css";
</style>