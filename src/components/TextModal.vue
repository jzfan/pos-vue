<template>
  <div class="body-box flex-col">
    <div class="text-input-col">
      <input type="text" v-model="text" class="text-input" :placeholder="tip">
      <button class="btn btn-blue" @click="submitText">OK</button>
      <button class="btn btn-green" @click="clearText">Clear</button>
      <button class="btn btn-red" @click="cancelText">Cancel</button>
    </div>
    <div class="text-col" v-for="(row, index) in keyboard" :key="index">
      <button @click="type(letter)" v-for="letter in row" :key="letter">{{ letter }}</button>
    </div>
  </div>
</template>

<script>
import bus from "../eventBus";
export default {
  data() {
    return {
      keyboard: [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "-", "[", "]", "\\"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", "+", ":", ",", "back"],
        ["z", "x", "c", "v", "b", "n", "m", ".", "<", ">", "/", "space"]
      ],
      text: ""
    };
  },
  computed: {
    action() {
      return this.$store.state.Text.action;
    },
    tip() {
      if (this.$store.state.Text.action === "special") {
        return "Name";
      }
      if (this.$store.state.Text.action === "special.price") {
        return "Price";
      }
      if (this.$store.state.Text.action === "special.qty") {
        return "Quantity";
      }
    }
  },
  created() {
    bus.$on("textNumber", number => {
      this.text += number;
    });
  },
  methods: {
    type(letter) {
      if (letter === "back") {
        this.text = this.text.substr(0, this.text.length - 1);
        return false;
      }
      if (letter === "space") {
        letter = " ";
      }
      this.text += letter;
    },
    cancelText() {
      this.text = "";
      this.$store.commit("textAction", null);
    },
    clearText() {
      this.text = "";
      if (this.action === "remark") {
        this.$store.commit("clearRemark");
      }
    },
    submitText() {
      if (this.action === "remark") {
        this.$store.commit("remarkItem", this.text);
        this.$store.commit("textAction", null);
        this.cancelText();
        return;
      }

      if (this.action === "special") {
        this.$store.commit("specialName", this.text);
        this.text = "";
        return;
      }
      if (this.action === "special.price") {
        this.$store.commit("specialPrice", this.text);
        this.text = "";
        return;
      }
      if (this.action === "special.qty") {
        this.$store.commit("specialQty", this.text);
        this.text = "";
        this.$store.commit("specialOrder", this.$store.state.Text.specialFood);
        this.$store.commit("specialReset");
        return;
      }
    }
  }
};
</script>

<style>
.flex-col {
  flex-direction: column;
}
.text-col {
  flex: 2;
  display: flex;
}
.text-col button {
  flex: 1;
  font-size: 1.5rem;
}
.text-col:nth-last-child(1) > button:nth-last-child(1) {
  flex: 3;
}
.text-input-col {
  display: flex;
  flex: 1;
}
.text-input {
  padding: 1rem;
  font-size: 1.5rem;
  flex: 10;
}
.text-input-col > button {
  flex: 1;
}
.text-input-col > button:nth-child(2) {
  flex: 2;
}
</style>
