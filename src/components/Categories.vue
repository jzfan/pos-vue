<template>
	<div class="cate-box">
            <button class="btn" 
              :class='btnColor(category.color)' 
              v-for='category in all' 
              @click='clicked(category)'>
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
  computed: {
    all() {
      return this.$store.state.Category.all
    }
  },
  methods: {
    clicked(category) {
      this.$store.commit('selectCategory', category)
      this.$store.commit('showFoods', category.id)
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