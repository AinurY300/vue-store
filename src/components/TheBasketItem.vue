<script setup>
import { useBasketStore } from '../stores/basket.js';
</script>

<template>
  <article class="basket-item">
    <img class="item-image" :src="$props.img">
    <div class="item-container">
      <div class="item-title">
        <p @click="$router.push($props.path)">{{ $props.title }}</p>
        <!-- <router-link :to="$props.path">{{ $props.title }}</router-link> -->
        <button class="item-xmark" @click="basket.deleteProduct($props.title)"/>
      </div>
      <div class="item-price">
        <fieldset class="counter-block">
          <button @click="basket.minusCount($props.title)">-</button>
          <span>{{ $props.count }} шт</span>
          <button @click="basket.plusCount($props.title)">+</button>
        </fieldset>
        <p>{{ formatPrice($props.price * $props.count) }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    path: {
      required: true
    },
    img: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    price: {
      required: true
    },
    count: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      basket: useBasketStore(),
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0
      }).format(price)
    }
  }
}
</script>

<style scoped lang="scss">

.basket-item {
  display: flex;
  position: relative;
  gap: var(--indentSize-1);
  background: var(--layout);
  border-bottom: var(--border);
  padding: var(--indentSize-1);
}


.item-image {
  width: 4.5rem;
  height: 4.5rem;
  object-fit: contain;
}

.item-container {
  flex: 1;
  display: flex;
  gap: var(--indentSize-1);
  justify-content: space-between;
  flex-direction: column;

  .item-title {
    font-size: .9rem;
    display: flex;
    align-items: flex-start;
    gap: var(--indentSize-1);
    justify-content: space-between;

    .item-xmark {
      border: 0;
      opacity: .3;
      padding: 1em;
      height: 1rem;
      min-height: 0;
      min-width: 1rem;
      transition: opacity var(--animTime);
      background: url(../assets/icons/xmark.svg) top right no-repeat;
      background-size: 70%;

      &:hover {
        opacity: 1;
      }
    }
  }

  .item-price {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}

// Перенести counter блок в отдельный компонент
.counter-block {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: var(--radius);
  border: var(--border);

  span {
    margin: 0 .5em;
    font-size: .8rem;
  }

  button {
    min-height: 0;
    height: 1.7rem;
    border: none;
    padding: 0 1em;
    border-radius: 0;
  }
}
</style>