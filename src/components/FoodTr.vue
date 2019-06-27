<template>
  <tr :class="{'bg-light': isSelected}" @click="select">
    <td>{{ food.name }}</td>
    <td>
      <span class="money">${{ food.price }}</span>
      * {{ food.qty }}
    </td>
    <td style="flex: 2">
      <span v-for="remark in remarks" :key="remark">
        {{remark}}
        <br>
      </span>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["food"],
  computed: {
    isSelected() {
      if (this.$store.state.Order.selectedUuid === null) {
        return false;
      }
      return this.$store.state.Order.selectedUuid == this.food.uuid;
    },
    remarks() {
      return this.food.remark.split("|");
    }
  },
  methods: {
    select() {
      this.$store.commit("selectedOrderIndex", this.food.uuid);
    }
  }
};
</script>