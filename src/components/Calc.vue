<template>
	<div class="calc-box">
	    <div class="screen">
	        <table class="screen-list" id='screen-list'>
	            <tr class="screen-list-header">
	                <td>Food</td>
	                <td>Price</td>
	            </tr>
	            <tr v-for='(food, index) in list' :class="{'bg-light': isSelected(index)}">
	                <td>{{ food.name }}</td>
	                <td>$ {{ food.price }}</td>
	            </tr>
	        </table>
	        <div class="screen-total">
	            <h2>$ {{ total | yuan2fen }}</h2>
	        </div>
	    </div>
	    <div class="calc">
	        <div class="calc-row">
	            <button class="btn">7</button>
	            <button class="btn">8</button>
	            <button class="btn">9</button>
	            <button class="btn h4">CL</button>
	        </div>
	        <div class="calc-row">
	            <button class="btn">4</button>
	            <button class="btn">5</button>
	            <button class="btn">6</button>
	            <button class="btn h4">NO SALE</button>
	        </div>
	        <div class="calc-row">
	            <button class="btn">1</button>
	            <button class="btn">2</button>
	            <button class="btn">3</button>
	            <button class="btn">X</button>
	        </div>
	        <div class="calc-row">
	            <button class="btn">0</button>
	            <button class="btn">.</button>
	            <button class="btn btn-enter">ENTER</button>
	        </div>
	    </div>
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
export default {
	data() {
		return {
			list: [],
			index: 1,
			total: 0,
			remarks: [],
		}
	},
	computed: {
	},
  created() {
  	bus.$on('order', (food) => {
  	    this.list.push(food)
  	    this.index++
  	    this.total += food.price * 100
  	    this.scrollToBottom()
  	})
  	bus.$on('cancelFood', () => {
  		this.list.pop()
  	})
  },
  methods: {
  	scrollToBottom() {
  	    this.$nextTick(() => {
  	        var container = this.$el.querySelector("#screen-list");
  	        container.scrollTop = container.scrollHeight;
  	    });
  	},
  	remark(msg) {
  		console.log(msg)
  	},
  	isSelected(index) {
  		return (index+1) === this.list.length
  	},
  	upClick(){
  		console.log('up')
  	}
  }
}
</script>

<style>
.screen-list-header {
	background: #333333;
	color: #ffffff;
	font-weight: 300;
}
.screen-list>tr {
	text-align: left;
}
.screen-list>tr>td {
    padding: 10px;
}
.screen-list>tr>td:first-child {
	flex: 4;
}
.screen-list>tr>td:nth-child(2) {
	flex: 2;
}
.remakrs {
   flex: 2;
   display: flex;
   flex-direction: column;
}
.remakrs>.btn{
	flex:1;
}
</style>