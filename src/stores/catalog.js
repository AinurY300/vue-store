import { defineStore } from "pinia"

import iphone from './iphone.json'

export const useCatalog = defineStore('catalog', {
  state() {
    return {
      iphone
    }
  },
  actions: {
    getProductList(productName) {
      return this.$state[productName]
    }



  },
})

