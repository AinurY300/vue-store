<script setup>
import VWrapper from '../components/VWrapper.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Lazy } from 'swiper'
import 'swiper/scss';
import 'swiper/scss/lazy';
// import 'swiper/scss/effect-creative' EffectCreative
</script>

<!-- 
:effect="'creative'"
:creativeEffect="{
  prev: {
    shadow: true,
    translate: ['-10%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}" 
-->

<template>
  <swiper class="banner"
    :speed="700" 
    :loop="true"
    :lazy="true"
    :allow-touch-move="false"
    :modules="[Pagination, Navigation, Lazy]" 
    :pagination="{
      el: '.banner-pagination',
      bulletClass: 'banner-bullet',
      bulletActiveClass: 'banner-bullet-active',
      clickable: true,
    }" 
    :navigation="{
      nextEl: '.next-slide',
      prevEl: '.prev-slide',
    }"
    >
    <swiper-slide>
      <div class="banner-slide banner-slide-1">
        <v-wrapper class="slide-content">
          <img class="slide-image" src="../assets/banner/MacBook.jpeg">
          <div class="slide-text">
            <span class="slide-subtitle">Новинка</span>
            <h2 class="slide-title">Apple MacBook Pro 16" 2022</h2>
            <p class="slide-description">
              Apple создали самый мощный MacBook Pro в истории.
              И это монстр разработанный специально для профессионалов.
              Феноменальная производительность.
            </p>
            <div class="button-wrapper">
              <button>Подробнее</button>
            </div>
          </div>
        </v-wrapper>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-slide banner-slide-2">
        <v-wrapper class="slide-content">
          <img class="slide-image" src="../assets/banner/iPhone 13.jpeg">
          <div class="slide-text">
            <span class="slide-subtitle">Новинка</span>
            <h2 class="slide-title">Apple iPhone 13 Pro</h2>
            <p class="slide-description">
              Значительно более мощная система камер. Абсолютно новые ощущения от дисплея. Самый быстрый
              чип для iPhone. Исключительная прочность. И огромный прирост ресурса аккумулятора. Всё это Pro.
            </p>
            <div class="button-wrapper">
              <button>Подробнее</button>
            </div>
          </div>
        </v-wrapper>
      </div>
    </swiper-slide>
    <div class="banner-controls">
      <v-wrapper class="controls-wrapper">
        <div class="banner-pagination"></div>
        <button class="prev-slide">‹</button>
        <button class="next-slide">›</button>
      </v-wrapper>
    </div>
  </swiper>
</template>



<!-- Используйте это пространство для стилизации отдельных слайдов -->
<style scoped lang="scss">
.banner-slide-1 {
  background: #f6f6f6;
}

.banner-slide-2 {
  background: #f9f9f9;
}
</style>









<style lang="scss">
.banner-controls {
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  position: absolute;
  margin-bottom: var(--indentSize-2);

  .controls-wrapper {
    display: flex;
    gap: var(--indentSize-1);
    justify-content: flex-end;

    @media (max-width: 640px) {
      justify-content: space-between;
    }
  }

  button.prev-slide,
  button.next-slide {
    padding: 0;
    height: 3rem;
    min-width: 3rem;
    font-size: 1.4rem;
    background: var(--layout);
  }
}

.banner-pagination {
  display: flex;
  margin-right: auto;
  align-self: center;
  gap: calc(var(--indentSize-1) / 2);

  .banner-bullet {
    width: .7rem;
    height: .7rem;
    cursor: pointer;
    display: block;
    box-sizing: border-box;
    background: #00000030;
    border-radius: var(--radius);
    
    &-active {
      background: var(--primary);
    }
  }

  @media (max-width: 640px) {
    display: none;
  }
}
</style>





<style scoped lang="scss">
.banner {
  height: 24rem;
  border-bottom: var(--border);

  .banner-slide {
    height: 100%;
  }

  @media (max-width: 640px) {
    height: 36rem;

    .slide-content {
      flex-direction: column;
      
      .slide-image {
        height: 0;
        flex-grow: 1;
      }

      .slide-text {
        flex: unset;
        text-align: center;
        align-items: center;
      }

    }
  }
}

.slide-content {
  display: flex;
  gap: var(--indentSize-1);
  padding-top: var(--indentSize-2);
  padding-bottom: var(--indentSize-2);

  .slide-image {
    min-width: 0;
    flex-basis: 50%;
    object-fit: contain;
  }

  .slide-text {
    display: flex;
    flex-basis: 50%;
    align-self: center;
    flex-direction: column;

    .slide-subtitle {
      font-weight: 700;
    }

    .slide-title {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .slide-description {
      margin-bottom: var(--indentSize-1);
      margin-top: calc(var(--indentSize-1) / 2);
    }

    .button-wrapper {
      align-items: center;
    }
  }
}
</style>