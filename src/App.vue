<template>
  <TheHeader/>
  <TheBasket/>
  <main class="main">
    <router-view/>
  </main>
  <TheFooter/>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheBasket from './components/TheBasket.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<style>
/* #app {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}
.main {
  flex: 1 1 auto;
} */
</style>