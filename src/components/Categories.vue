<template>
	<div class="cate-box">
            <button class="btn" :class='btnColor(category.color)' v-for='category in categories' @click='clicked(category.id)'>
                {{ category.name | upcase }}
            </button>
            <button class="btn">
              
            </button>
            <button class="btn">
              
            </button>
        </div>
</template>

<script>
import bus from '../eventBus'
export default {
  data() {
  	return {
  		categories: []
  	}
  },
  created() {
  	this.$http.get('/categories')
  		.then(res => {
        this.categories = res.data
        window.localStorage.setItem('categories', JSON.stringify(res.data))
      })
  },
  methods: {
    clicked(cid) {
      bus.$emit("chooseCategory", cid)
    },
    btnColor(color) {
      return `btn-${color}`
    }
  }
}
</script>

<style>
.cate-box {
	flex: 1;
	display: flex;
}
.cate-box>.btn {
	flex: 1;
}
</style>