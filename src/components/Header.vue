<template>
	<div class="header-box">
		<display-cmp></display-cmp>
		<calc-cmp></calc-cmp>
	    <div class="remakrs">
	    	<button class="btn btn-red" @click='remark("take away")'>T/A</button>
	    	<button class="btn btn-blue">action</button>
	    	<button class="btn btn-pink">action</button>
	    	<button class="btn btn-cyan">action</button>
	    </div>
	</div>
</template>

<script>
import bus from '../eventBus'
import displayCmp from './Display'
import calcCmp from './Calc'
export default {
	components: {
		displayCmp, calcCmp
	},
	data() {
		return {
			remarks: [],
		}
	},
  methods: {
  	remark(msg) {
  		bus.$emit('remark', msg)
  	},
  }
}
</script>

<style>
.remakrs {
   flex: 2;
   display: flex;
   flex-direction: column;
}
.remakrs>.btn{
	flex:1;
}
</style>