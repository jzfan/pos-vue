<template>
            <tr :class="{'bg-light': isSelected}" @click='select'>
                <td>{{ food.name }}</td>
                <td><span class="money">${{ food.price }} </span> * {{ food.qty }}</td>
                <td style="flex: 2">
                        {{ food.remark }}
                </td>
            </tr>
</template>
<script>
export default {
    props: ['food'],
    computed: {
        isSelected() {
            if (this.$store.state.Order.selectedUuid === null) {
                return false
            }
            return this.$store.state.Order.selectedUuid == this.food.uuid
        }
    },
    methods: {
        select() {
            this.$store.commit('selectedOrderIndex', this.food.uuid)
        },
    }
}
</script>