<template>
	<div class="food-box">
	        <button class="btn" 
                :class='btnColor(food.category_id)' 
	        	v-for='food in all'
                @click='chooseFood(food)'>
	            {{ food.abbr }}
	        </button>
	</div>
</template>

<script>
import {uuid} from '../func'
export default {
    computed: {
        all() {
            return this.$store.state.Food.show
        }
    },
    methods: {
        btnColor(cid) {
            for (let c of this.$store.state.Category.all) {
                if (c.id == cid) {
                    return `btn-${c.color}`
                }
            }
        },
        chooseFood(food) {
            let item = Object.assign({uuid: uuid()}, food)
            this.$store.commit('orderFood', item)
        }
    }
}
</script>
<style>
.body-box {
    display: flex;
    height: 100%;
}

.food-box {
    flex: 7;
    display: flex;
    height: inherit;
    flex-wrap: wrap
}

.food-box>.btn {
    width: 16.6%
}

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