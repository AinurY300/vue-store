<script setup>
import VWrapper from '../components/VWrapper.vue';
import { useCatalog } from '../stores/catalog'
</script>
<template>
  <section class="product">
    <v-wrapper>
      <div class="product-container">
        <section class="product-sort"></section>
        <section class="product-list">
          <router-link 
            v-for="product in productList"
            :key="product.id"
            :to="{ path: `/catalog/${this.$route.params.product}/${product.id}`}">
            <article class="product-card">
              <img class="product-img" :src="product.colors[0].img">
              <div class="product-text">
                <div class="product-title">{{ product.title }}</div>
                <div class="product-price">
                  <span>от</span>
                  <span>{{ formatPrice(product.options[0].price) }}</span>
                </div>
              </div>
              <button>Добавить в корзину</button>
            </article>
          </router-link>
        </section>
        <aside class="product-filter"></aside>
      </div>
    </v-wrapper>
  </section>
</template>

<style scoped lang="scss">
.product {
  background: #fff;
  border-bottom: var(--border);
}

.product-container {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--indentSize-2);
  grid-template-areas:
  "sort filter"
  "list filter";
  
  .product-filter {
    width: 16rem;
    grid-area: filter;
    align-self: stretch;
    box-sizing: border-box;
    border-left: var(--border);
    padding: var(--indentSize-2);
  }
  .product-sort {
    height: 3rem;
    grid-area: sort;
    background: #fff;
    border: var(--border);
    border-radius: var(--radius);
    margin-top: var(--indentSize-2);
  }
  @media (max-width: 820px) {

    grid-template-columns: 1fr;
    grid-template-areas: 
    "sort"
    "list";
    .product-filter {
      display: none;
    }
  }
}





.product-list {
  display: grid;
  grid-area: list;
  gap: var(--indentSize-1);
  margin-bottom: var(--indentSize-2);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
}
 
.product-card {
  height: 22rem;
  display: flex;
  background: #fff;
  border: var(--border);
  flex-direction: column;
  gap: var(--indentSize-1);
  padding: var(--indentSize-2);
  border-radius: var(--radius);


  .product-img {
    flex: 1;
    min-width: 0;
    min-height: 0;
    object-fit: contain;
    box-sizing: border-box;
    padding: var(--indentSize-2);
  }

  .product-text {

    .product-title {
      border-bottom: var(--border);
      padding-bottom: var(--indentSize-1);
      margin-bottom: var(--indentSize-1);
    }

    .product-price {
      display: flex;
      font-size: 1rem;
      font-weight: 600;
      justify-content: space-between;
    }
  }
}
</style>

<script>
export default {
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0
      }).format(price)
    }
  },
  beforeCreate() {
    this.productList = useCatalog().getProductList(this.$route.params.product)
  },
}
</script>