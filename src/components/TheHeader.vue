<script setup>
import VWrapper from './VWrapper.vue';
import { useBasketStore } from '../stores/basket';
</script>

<template>
  <header class="header">
    <!-- Основной контент -->
    <div class="header-content">
      <v-wrapper>
        <div class="content-wrapper">
          <button @click="catalogOpen = !catalogOpen">Каталог</button>
          <div class="button-wrapper">
            <!-- <button>Войти</button> -->
            <button @click="this.basket.changeBasket">Корзина</button>
          </div>
        </div>
      </v-wrapper>
    </div>
    <!-- Спрятанный контент -->
    <transition name="appearance">
      <div class="header-navigation" v-if="catalogOpen">
        <v-wrapper>
          <nav class="navigation-content">
            <router-link class="navigation-link" to="/">iPhone</router-link>
            <router-link class="navigation-link" to="/">Компьютеры Mac</router-link>
            <router-link class="navigation-link" to="/">iPad</router-link>
            <router-link class="navigation-link" to="/">Apple Watch</router-link>
            <router-link class="navigation-link" to="/">AirPods</router-link>
            <router-link class="navigation-link" to="/">Аксессуары</router-link>
          </nav>
        </v-wrapper>
      </div>
    </transition>
    <span
      @click="catalogOpen = !catalogOpen"
      class="popup-background" 
      :class="{ open: catalogOpen }"
    />
  </header>
</template>

<script>
export default {
  emits: ['basket'],
  data() {
    return {
      catalogOpen: false,
      basket: useBasketStore()
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  z-index: 2;
  position: sticky;
  max-height: 100vh;
  overflow-y: auto;

  // Основной контент
  .header-content {
    z-index: 1;
    position: relative;
    background: var(--layout);
    border-bottom: var(--border);
    padding: var(--indentSize-1) 0;

    .content-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }





  // Спрятанный контент
  .header-navigation {
    width: 100%;
    position: fixed;
    background: var(--layout);
    border-bottom: var(--border);

    &.appearance-enter-active, &.appearance-leave-active {
      transition: transform var(--animTime);
    }

    &.appearance-enter-from, &.appearance-leave-to {
      transform: translateY(calc(-100% - var(--borderWidth)));
    }



    .navigation-content {
      display: flex;
      align-items: center;
      padding: var(--indentSize-1) 0;

      .navigation-link {
        flex: 1;
        text-align: center;
        border-left: var(--border);
        padding: .3em 0;

        &:nth-child(1) {
          border: 0
        }

        &:hover {
          text-decoration: underline;
        }
      }

      @media (max-width: 640px) {
        align-items: stretch;
        flex-direction: column;

        .navigation-link {
          border: 0;
          padding: var(--indentSize-1);
          border-top: var(--border);
        }
      }
    }
  }
}
</style>





