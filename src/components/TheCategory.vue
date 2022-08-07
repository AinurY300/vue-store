<template>
  <section class="category-section">
    <v-wrapper>
      <div class="category-wrapper">
        <router-link to="/catalog/iphone">
          <article class="category-item">
            <img class="item-image" src="../assets/catalog/iPhone.png">
            <div class="item-text">
              <h5>iPhone</h5>
              <p>Сильный мира всего</p>
            </div>
          </article>
        </router-link>
        <router-link to="/catalog/mac">
          <article class="category-item">
            <img class="item-image" src="../assets/catalog/Mac.jpg">
            <div class="item-text">
              <h5>Компьютеры Mac</h5>
              <p>Суперсила для профиссионалов</p>
            </div>
          </article>
        </router-link>
        <router-link to="/catalog/ipad">
          <article class="category-item">
            <img class="item-image" src="../assets/catalog/iPad.jpg">
            <div class="item-text">
              <h5>iPad</h5>
              <p>Заряжен на работу</p>
            </div>
          </article>
        </router-link>
        <router-link to="/catalog/watch">
          <article class="category-item">
            <img class="item-image" src="../assets/catalog/Apple Watch.jpg">
            <div class="item-text">
              <h5>Apple Watch</h5>
              <p>Технологии на максимум</p>
            </div>
          </article>
        </router-link>
        <router-link to="/">
          <article class="category-item">
            <img class="item-image" src="../assets/catalog/AirPods.jpg">
            <div class="item-text">
              <h5>AirPods</h5>
              <p>Абсолютно безупречный звук</p>
            </div>
          </article>
        </router-link>
        <router-link to="/">
          <article class="category-item" href="">
            <img class="item-image" src="../assets/catalog/Cable2.jpg">
            <div class="item-text">
              <h5>Аксессуары</h5>
              <p>Всё для вашего устройства</p>
            </div>
          </article>
        </router-link>
      </div>
    </v-wrapper>
  </section>
</template>

<script setup>
import VWrapper from "./VWrapper.vue";
</script>

<style lang="scss" scoped>
.category-section {
  border-bottom: var(--border);
  // padding: var(--indentSize-2) 0;

  .category-wrapper {
    display: grid;
    gap: var(--borderWidth);
    background: var(--borderColor);
    grid-template-columns: repeat(3, 1fr);
    // grid-template-areas:
    // "iPhone Mac Mac"
    // "iPhone AppleWatch iPad"
    // "AirPods Accessories iPad";

    @media (max-width: 640px) {
      grid-template-columns: 1fr 1fr;
      // grid-template-areas:
      //   "iPhone Mac"
      //   "iPad AppleWatch"
      //   "AirPods Accessories";
    }
  }
}

.category-item {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 100%;

  &:hover {
    .item-image {
      transform: scale(1.05);
    }
  }


  .item-image {
    width: 100%;
    flex-grow: 1;
    height: 11rem;
    overflow: hidden;
    object-fit: contain;
    box-sizing: border-box;
    padding: var(--indentSize-2);
    transition: transform var(--animTime);
  }

  .item-text {
    z-index: 1;
    position: relative;
    background: #fff;
    padding: var(--indentSize-1);

    h5 {
      font-size: 1rem;
    }

    p {
      font-size: .85rem;
    }
  }


  &:nth-child(1) {
    // grid-area: iPhone;
    background: #fff;
  }

  &:nth-child(2) {
    // grid-area: Mac;
    background: #fff;
  }

  &:nth-child(3) {
    // grid-area: iPad;
    background: #fff;
  }

  &:nth-child(4) {
    // grid-area: AppleWatch;
    background: #fff;
  }

  &:nth-child(5) {
    // grid-area: AirPods;
    background: #fff;
  }

  &:nth-child(6) {
    // grid-area: Accessories;
    background: #fff;
  }
}
</style>