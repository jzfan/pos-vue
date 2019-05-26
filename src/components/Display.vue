<template>
	<div class="screen">
	    <table class="screen-list" id='screen-list'>
	        <tr class="screen-list-header">
	            <td>Food</td>
	            <td>Price</td>
	        </tr>
	        <tr v-for='food in list' :key='food.id' 
	        	:class="{'bg-light': isSelected(food)}"
	        	@click='select(food)'>
	            <td>{{ food.name }}</td>
	            <td>$ {{ food.price }} * {{ food.qty }}</td>
	        </tr>
	    </table>
	    <div class="screen-total">
          <h2>Received: 
                <input type="text" 
                  v-model='received'
                  v-if='inputing'>
                <span v-else>
                  $ {{ received }}
                </span>
          </h2>
          <h2 v-if='received !== 0'>Chage: $ {{ change }}</h2>
	        <h2>Total: $ {{ total | fen2yuan }}</h2>
	    </div>
	</div>
</template>

<script>
import bus from '../eventBus'
export default {
	data() {
		return {
			list: [],
			total: 0,
			selectedFood: null,
      received: 0,
      change: 0,
      inputing: false
		}
	},
  created() {
  	bus.$on('order', (food) => {
  		let find = this.list.find((item) => item.id === food.id)
  		if (find) {
  			find.qty++
  		} else {
  			food.qty = 1
  	    	this.list.push(food)
  		}
  		this.selectedFood = food
  	    this.total += food.price * 100
  	    this.scrollToBottom()
  	})
  	bus.$on('cancelFood', () => {
  		if (this.selectedFood === null) {
  			return false
  		}
  		this.list.splice(this.list.indexOf(this.selectedFood), 1)
  		this.total -= this.selectedFood.price * 100 * this.selectedFood.qty
  		this.selectedFood = null
  	})
    bus.$on('cashCharge', () => {
      this.inputing = true
    })
  },
  methods: {
  	scrollToBottom() {
  	    this.$nextTick(() => {
  	        var container = this.$el.querySelector("#screen-list");
  	        container.scrollTop = container.scrollHeight;
  	    });
  	},
  	select(food) {
  		this.selectedFood = food
  	},
  	isSelected(food) {
  		if (this.selectedFood === null) {
  			return false
  		}
  		return this.selectedFood.id === food.id
  	},
  }
}
</script>

<style>
.screen {
    flex: 6;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    height: 100%;
}

.screen-list {
    flex: 1;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    overflow-y: scroll;
    display: block;
}

.screen-list>tr {
    display: flex;
  text-align: left;
}

.screen-list>tr>td {
    padding: 10px;
}

.screen-total {
    background: #333333;
    color: #ffffff;
    padding: 15px;
      display: flex;
  text-align:center;
}
.screen-list-header {
	background: #333333;
	color: #ffffff;
	font-weight: 300;
}
.screen-list>tr>td:first-child {
	flex: 4;
}
.screen-list>tr>td:nth-child(2) {
	flex: 2;
}
.screen-total>h2,input {
  flex: 1;
}
</style>