import { defineStore } from "pinia"

export const useBasketStore = defineStore('basket', {
  state() {
    return {
      open: false,
      basketValue: [],
      totalPrice: 0
    }
  },
  getters: {
    getBasketValue(state) {
      return state.basketValue
    }
  },  

  actions: {
    calcTotalPrice() {
      const arr = [...this.basketValue].map(i => i.price * i.count)
      if (arr.length) {
        this.totalPrice = arr.reduce((prev, curr) => prev + curr)
      } else {
        this.totalPrice = 0
      }
    },
    changeBasket() {
      this.open = !this.open
    },
    plusCount(title) {
      this.basketValue.find(i => i.title == title).count++
      this.calcTotalPrice()
    },
    minusCount(title) {
      const product = this.basketValue.find(i => i.title == title)
      if (product.count > 1) {
        product.count--
        this.calcTotalPrice()
      }
    },
    addProduct(product) {
      const pd = this.basketValue.find(i => i.title == product.title)
      if (!pd) {
        this.basketValue.push(product)
        console.log(product.path);
      } else {
        pd.count++
      }
      this.calcTotalPrice()
    },
    deleteProduct(title) {
      if (title) {
        const index = this.basketValue.findIndex(i => i.title == title)
        this.basketValue.splice(index, 1)
        this.calcTotalPrice()
      }
    }
  }
})