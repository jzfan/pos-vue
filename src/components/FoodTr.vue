<template>
    <tr v-for='food in list' :key='food.id' :class="{'bg-light': isSelected(food)}" @click='select(food)'>
        <td>{{ food.name }}</td>
        <td>$ {{ food.price }} * {{ food.qty }}</td>
        <td>
            <span v-if='food.remark'>
                <p v-for='msg in food.remark'>
                    {{ msg }}
                </p>
            </span>
            <span v-else>no</span>
        </td>
    </tr>
</template>
<script>
export default {
    data() {
        return {
            selectedFood: null,
        }
    },
    computed: {
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
        bus.$on('remark', (msg) => {
            if (this.selectedFood === null) {
                return false
            }
            let find = this.list.find((food) => food.id === this.selectedFood.id)
            if (!find) {
                return false
            }
            console.log(msg)
            if (find.remark) {
                find.remark.push(msg)
            } else {
                find.remark = []
                find.remark.push(msg)
            }
        })
    },
    methods: {
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