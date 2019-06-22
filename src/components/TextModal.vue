<template>
  <div class="body-box flex-col">
    <div class="text-input-col">
      <input type="text" v-model="text" class="text-input">
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
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", "back"],
        ["z", "x", "c", "v", "b", "n", "m", "space"]
      ],
      text: ""
    };
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
      bus.$emit("cancelText");
    },
    clearText() {
      this.$store.commit("clearText");
    },
    submitText() {
      this.$store.commit("remarkItem", this.text);
      this.cancelText();
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
.text-col button:nth-last-child() {
  flex: 2;
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
</style>
