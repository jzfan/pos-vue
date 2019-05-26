<template>
	<div class="side-bar">
	    <button class="btn" @click='unchoose'>DELETE</button>
	    <button class="btn" @click='cashTotal'>Cash Total</button>
	    <button class="btn">abc</button>
	</div>
</template>

<script>
import bus from '../eventBus'
export default {
  methods: {
      unchoose() {
          bus.$emit("cancelFood")
      },
      cashTotal() {
          bus.$emit("clearFood")
      }
  }
}
</script>

<style>

.side-bar {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: inherit;
}

.side-bar>.btn {
    flex: 1;
}
</style>