<template>
  <div class="screen">
    <table class="screen-list" id="screen-list">
      <tr class="screen-list-header">
        <td>Food</td>
        <td>Price</td>
        <td>Num {{ orderNumber }}</td>
      </tr>
      <food-tr v-for="food in order" :key="food.uuid" :food="food"></food-tr>
    </table>
    <p class="screen-info">{{ info }}</p>
    <div class="screen-total">
      <h2 class="received-h2">
        <label>Paid:</label>
        <input type="text" v-model="received" v-if="receiving" v-focus>
        <span v-else class="money">$ {{ received }}</span>
      </h2>
      <h2 v-if="change !== 0">
        Chage:
        <span class="money">${{ change | fen2yuan}}</span>
      </h2>
      <h2>
        Total:
        <span class="money">${{ total | fen2yuan }}</span>
      </h2>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import bus from "../eventBus";
import FoodTr from "./FoodTr";
export default {
  components: {
    FoodTr
  },
  data() {
    return {
      // received: '',
      discount: false,
      fee: false,
      info: ""
    };
  },
  created() {
    bus.$on("discount", () => {
      if (this.discount === false) {
        this.info += " discount ";
        this.discount = true;
      } else {
        this.info = this.info.replace(" discount ", "");
        this.discount = false;
      }
    });
    bus.$on("fee", () => {
      if (this.fee === false) {
        this.info += " fee ";
        this.fee = true;
      } else {
        this.info = this.info.replace(" fee ", "");
        this.fee = false;
      }
    });
    // bus.$on('special', () => {
    //     this.$store.commit('inputSpecial')
    // })
  },
  computed: {
    ...mapState({
      receiving: state => state.Calc.status === "pay",
      order: state => state.Order.all,
      received: state => state.Calc.pay,
      orderNumber: state => state.Calc.orderNumber
    }),
    total() {
      this.scrollToBottom();
      let sum = this.order.reduce((prev, cur) => {
        return prev + parseInt(cur.price * 100 * cur.qty);
      }, 0);
      if (this.discount) {
        return parseInt(sum * 0.9);
      }
      if (this.fee) {
        return parseInt(sum * 1.1);
      }
      return sum;
    },
    change() {
      return this.received !== "" ? this.received * 100 - this.total : 0;
    }
  },
  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        var container = this.$el.querySelector("#screen-list");
        container.scrollTop = container.scrollHeight;
      });
    }
  }
};
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

.screen-list > tr {
  display: flex;
  text-align: left;
}

.screen-list > tr > td {
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

.screen-list > tr > td:first-child {
  flex: 3;
}

.screen-list > tr > td:nth-child(2) {
  flex: 3;
}

.screen-list > tr > td:nth-child(3) {
  flex: 2;
}

.screen-total > h2,
input {
  flex: 1;
}

.received-h2 {
  display: flex;
}
.screen-info {
  padding: 1em 2em;
  text-align: right;
}
</style>