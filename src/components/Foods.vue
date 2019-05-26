<template>
	<div class="food-box">
	        <button class="btn" :class='btnColor(food.category_id)' 
	        	v-for='food in foods' @click='chooseFood(food)'>
	            {{ food.abbr }}
	        </button>
	</div>
</template>

<script>
import bus from '../eventBus'
export default {
    data() {
        return {
            foods: [],
            categories: []
        }
    },
    created() {
        bus.$on('chooseCategory', (cid) => {
            this.$http.get(`/foods?cid=${cid}`)
                .then(res => {
                    this.foods = res.data
                    // this.foods = this.chunkFoods(res.data, 8)
                })
        })
        this.categories = JSON.parse(window.localStorage.getItem('categories'))
    },
    methods: {
        chunkFoods(arr, size) {
            let chunk = []
            for (let i = 0, len = arr.length; i < len; i += size) {
                chunk.push(arr.slice(i, i + size));
            }
            return chunk
        },
        btnColor(cid) {
            for (let c of this.categories) {
                if (c.id == cid) {
                    return `btn-${c.color}`
                }
            }
        },
        chooseFood(food) {
            bus.$emit("order", food)
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