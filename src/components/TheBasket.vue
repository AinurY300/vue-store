<script setup>
import TheBasketItem from './TheBasketItem.vue';
import { useBasketStore } from '../stores/basket';
</script>

<template>
  <transition name="appearance">
    <aside class="basket" v-if="this.basket.open">
      <header class="basket-header">
        <p class="basket-title">Ваша корзина</p>
        <button class="xmark-button" @click="this.basket.changeBasket" />
      </header>
      <section class="basket-list">
        <the-basket-item 
          v-for="item in basket.basketValue" 
          :path="item.path"
          :img="item.img" 
          :title="item.title" 
          :price="item.price"
          :count="item.count" />
      </section>
      <footer class="basket-footer">
        <div class="price">
          <p>Сумма заказа:</p>
          <p class="total-price">{{

            new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            currencyDisplay: 'symbol',
            minimumFractionDigits: 0
            }).format(basket.totalPrice)

          }}</p>
        </div>
        <button class="primary">Оформить заказ</button>
      </footer>
    </aside>
  </transition>
  <transition name="fade">
    <div v-if="this.basket.open" class="popup-background basket-background open" @click="this.basket.changeBasket" />
  </transition>
</template>


<script>
export default {
  data() {
    return {
      basket: useBasketStore(),
      totalPrice: null
    }
  }
}
</script>


<style lang="scss" scoped>
.basket-background {
  z-index: 2;
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity var(--animTime);
  }
  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
  }
}

.basket {
  top: 0;
  right: 0;
  z-index: 3;
  height: 100%;
  display: flex;
  direction: rtl;
  position: fixed;
  overflow-y: scroll;
  flex-direction: column;
  width: var(--basketWidth);
  border-left: var(--border);

  * {
    direction: ltr
  }

  &.appearance-enter-active,
  &.appearance-leave-active {
    transition: transform var(--animTime);
  }

  &.appearance-enter-from,
  &.appearance-leave-to {
    transform: translateX(var(--basketWidth));
  }
}

.basket-header {
  top: 0;
  z-index: 1;
  display: flex;
  position: sticky;
  align-items: center;
  background: var(--layout);
  padding: var(--indentSize-1);
  border-bottom: var(--border);
  justify-content: space-between;

  .basket-title {
    font-size: 1.2em;
    font-weight: 500;
  }

  button {
    padding: 0;
    width: 3rem;
    height: 3rem;
  }
}

.basket-list {
  flex: 1;
  background: var(--body);
}

.basket-footer {
  bottom: 0;
  z-index: 1;
  display: flex;
  position: sticky;
  background: var(--layout);
  padding: var(--indentSize-1);
  justify-content: space-between;
  box-shadow: 0px calc(var(--borderWidth) * -1) 0px 0px var(--borderColor);


  .price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .total-price {
    font-size: 1.3rem;
    font-weight: 600;
  }
}
</style>




































<!-- 
<style lang="scss" scoped>
.basket {
  --basketWidth: 30rem;

  @media (max-width: 640px) {
    --basketWidth: 100vw;
  }

  z-index: 10;
  top: 0;
  left: 100%;
  height: 100%;
  display: flex;
  direction: rtl;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  visibility: hidden;
  box-sizing: border-box;
  background: var(--layout-color);
  width: var(--basketWidth);
  border-left: var(--border);


  transition: transform .3s,
  visibility .3s;
  flex-direction: column;
  // opacity: 0;


  * {
    direction: ltr
  }

  &~.modal-background[data-modal="basket"] {
    visibility: hidden;
  }

  &[open] {
    // opacity: 1;
    visibility: visible;
    transform: translateX(calc(var(--basketWidth) * -1));

    &~.modal-background[data-modal="basket"] {
      opacity: 1;
      visibility: visible;
    }
  }

  .basket__header {
    top: 0;
    z-index: 2;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    background: var(--layout-color);
    border-bottom: var(--border);
    padding: calc(var(--indentSize-2) / 2);

    p {
      font-size: 1.1rem;
    }

    button.modal-close {
      padding: 0;
      width: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .basket__container {
    flex: 1;
    display: flex;
    background: #f5f5f5;
    flex-direction: column;

    .basket__item {
      display: flex;
      background: #fff;
      position: relative;
      gap: calc(var(--indentSize-2) / 2);
      padding: calc(var(--indentSize-2) / 2);
      border-top: var(--border);

      &:nth-child(1) {
        border-top: 0;
      }

      &:nth-last-child(1) {
        border-bottom: var(--border);
      }

      .item__image {
        width: 4.5rem;
        height: 4.5rem;
        object-fit: contain;
      }

      .item__text {
        flex: 1;
        display: flex;
        gap: calc(var(--indentSize-2) / 2);
        justify-content: space-between;
        flex-direction: column;


        .item__title {
          font-size: .9rem;
          display: flex;
          align-items: flex-start;
          gap: calc(var(--indentSize-2) / 2);
          justify-content: space-between;

          .item__delete {
            opacity: .3;
            padding: 1em;
            border: none;
            height: 1rem;
            min-width: 1rem;
            transition: opacity .3s;
            // background: url(../xmark.svg) center no-repeat;
            // background: url(../basket/trash.svg) center no-repeat;
            background-size: 70%;

            &:hover {
              opacity: 1;
            }
          }
        }

        .item__price {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

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
              height: 1.7rem;
              border: none;
              padding: 0 1em;
              border-radius: 0;
            }
          }
        }
      }

    }
  }

  .basket__footer {
    bottom: 0;
    display: flex;
    position: sticky;
    align-items: center;
    background: var(--layout-color);
    border-top: var(--border);
    gap: calc(var(--indentSize-2) / 2);
    padding: calc(var(--indentSize-2) / 2);

    p {
      font-weight: 600;
    }

    .total-price {
      font-weight: 700;
      font-size: 1.2rem;
    }



    button {
      margin-left: auto;
    }
  }
}
</style>

 -->













<!-- 
<article class="basket__item">
        <img class="item__image image-lazy" src="/1x1.png" data-src="/basket/iPhone 12.jpg">
        <div class="item__text">
          <div class="item__title">
            <a href="">iPhone 12, 265GB, чёрный</a>
            <button class="item__delete"></button>
          </div>
          <div class="item__price">
            <fieldset class="counter-block">
              <button>-</button>
              <span>1 шт</span>
              <button>+</button>
            </fieldset>
            <p>90 000₽</p>
          </div>
        </div>
      </article> -->