<template>
    <div class="screen">
        <table class="screen-list" id='screen-list'>
            <tr class="screen-list-header">
                <td>Food</td>
                <td>Price</td>
                <td style="flex: 2"></td>
            </tr>
            <tr v-for='(food, index) in list' :class="{'bg-light': isSelected(index)}" @click='select(index)'>
                <td>{{ food.name }}</td>
                <td>$ {{ food.price }} * {{ food.qty }}</td>
                <td style="flex: 2">
                    <span v-if='typeof(food.remark) != "undefiend"'>
                        <p v-for='msg in food.remark'>
                            {{ msg }}
                        </p>
                    </span>
                    <span v-else> </span>
                </td>
            </tr>
        </table>
        <div class="screen-total">
            <h2 class="received-h2">
                <label>
                    Received:
                </label>
                <input type="text" v-model='received' v-if='receiving' v-focus />
                <span v-else>
                    $ {{ received }}
                </span>
            </h2>
            <h2 v-if='change !== 0'>Chage: $ {{ change | fen2yuan}}</h2>
            <h2>Total: $ {{ total | fen2yuan }}</h2>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import bus from '../eventBus'
export default {
    data() {
        return {
            list: [],
            // total: 0,
            selectedFood: null,
            received: '',
            // change: 0,
        }
    },
    computed: {
        ...mapState({
            receiving: state => state.Calc.receiving
        }),
        total() {
          if (this.list.length === 0 ) {
            return 0
          }
          let n = 0
          for (let food of this.list) {
            n += food.price * 100 * food.qty
          }
          return n
        },
        change() {
            return this.received !== '' ? this.received * 100 - this.total : 0

        }
    },
    created() {
        bus.$on('order', (food) => {
            food.qty = 1
            this.list.push(food)
            this.selectedFood = this.list.length - 1
            // this.total += food.price * 100
            this.scrollToBottom()
        })
        bus.$on('cancelFood', () => {
            if (this.selectedFood === null) {
                return false
            }
            // this.total -= this.list[this.selectedFood].price * 100 * this.list[this.selectedFood].qty
            this.list.splice(this.selectedFood, 1)
            this.selectedFood = null
        })
        bus.$on('cashCharge', () => {
            if (this.list.length === 0) {
                return false
            }
            this.$store.commit('receive_inputing')
        })
        bus.$on('enter', () => {
            this.$store.commit('received')
        })
        bus.$on('numberInput', (num) => {
            if (this.receiving) {
                this.received += num
                return false
            }
            if (this.selectedFood !== null) {
               let find = this.list[this.selectedFood]
               let diff = (num - find.qty) * (find.price * 100)
               // this.total += diff
               find.qty = num
               this.$set(this.list, this.selectedFood, find)
            }
        })
        bus.$on('remark', (msg) => {
            if (this.selectedFood === null) {
                return false
            }
            let find = this.list[this.selectedFood]
            if (find.remark) {
                if (find.remark.includes(msg)) {
                    return false
                }
                find.remark.push(msg)
                this.$set(this.list, this.selectedFood, find)
            } else {
                find.remark = [msg]
                this.$set(this.list, this.selectedFood, find)
            }
        })
    },
    methods: {
        scrollToBottom() {
            this.$nextTick(() => {
                var container = this.$el.querySelector("#screen-list");
                container.scrollTop = container.scrollHeight;
            });
        },
        select(index) {
            this.selectedFood = index
        },
        isSelected(index) {
            if (this.selectedFood === null) {
                return false
            }
            return this.selectedFood === index
        }
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
    text-align: center;
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

.screen-total>h2,
input {
    flex: 1;
}

.received-h2 {
    display: flex;
}
</style>