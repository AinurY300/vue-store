<template>
  <TheBanner />
  <TheCategory/>
  <!-- Наши преимущества -->
  <section class="advantages">
    <v-wrapper>
      <!-- <p class="section-title">Наши преимущества</p> -->
      <div class="advantages-content">
        <article class="advantages-item">
          <img class="item-icon" src="../assets/icons/advantages-1.svg">
          <p class="item-text">Официальный партнёр компании Apple</p>
        </article>
        <article class="advantages-item">
          <img class="item-icon" src="../assets/icons/advantages-2.svg">
          <p class="item-text">Регулярные скидки и предложения</p>
        </article>
        <article class="advantages-item">
          <img class="item-icon" src="../assets/icons/advantages-3.svg">
          <p class="item-text">Возврат товара в течении 30 дней</p>
        </article>
        <article class="advantages-item">
          <img class="item-icon" src="../assets/icons/advantages-4.svg">
          <p class="item-text">Бесплатная доставка по всей России</p>
        </article>
      </div>
    </v-wrapper>
  </section>
  <!-- Наши услуши -->
  <section class="section services">
    <v-wrapper>
      <p class="section-title">Наши услуги</p>
      <div class="services-content">
        <a href="" class="services-item">
          <img class="item-image" src="../assets/icons/services-1.png">
          <div class="item-text">
            <h5>Рассрочка и кредит</h5>
            <p>
              Не нужно идти в банк.
              Рассмотрим заявку онлайн за несколько минут
            </p>
          </div>
        </a>
        <a href="" class="services-item">
          <img class="item-image" src="../assets/icons/services-2.png">
          <div class="item-text">
            <h5>Подарочные сертификаты</h5>
            <p>
              Подарите электронный сертификат.
              Ведь вариантов отличных подарков так моного!
            </p>
          </div>
        </a>
        <a href="" class="services-item">
          <img class="item-image" src="../assets/icons/services-3.png">
          <div class="item-text">
            <h5>Система Трейд-in</h5>
            <p>
              Сдайте свои старые устройства в трейд-ин
              и получите выгоду при покупке новых.
            </p>
          </div>
        </a>
        <a href="" class="services-item">
          <img class="item-image" src="../assets/icons/services-4.png">
          <div class="item-text">
            <h5>Страхование вашей техники</h5>
            <p>
              Защитите свои устройства от
              самых распространёных рисков,
            </p>
          </div>
        </a>
      </div>
    </v-wrapper>
  </section>
</template>

<script setup>
import TheBanner from "../components/TheBanner.vue"
import VWrapper from "../components/VWrapper.vue"
import TheCategory from '../components/TheCategory.vue'
</script>


<style lang="scss" scoped>
// === Наши преимущества ===
.advantages {
  background: #f5f5f5;
  padding: var(--indentSize-2) 0;

  .advantages-content {
    display: grid;
    box-sizing: border-box;
    gap: var(--indentSize-1);
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 840px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 375px) {
      .advantages-item {
        flex-direction: column;
        text-align: center;
      }
    }

    @media (max-width: 260px) {
      grid-template-columns: 1fr;

      .advantages-item {
        flex-direction: row;
        text-align: auto;
      }
    }
  }
}

.advantages-item {
  display: flex;
  align-items: center;
  // border: var(--border);
  box-sizing: border-box;
  gap: var(--indentSize-1);
  // border-radius: var(--radius);
  padding: var(--indentSize-2);


  .item-icon {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    object-fit: contain;
  }

  .item-text {
    font-size: .9rem;
  }
}

// === Наши услуги ===
.services {
  color: #fff;
  background: #000;
  // margin-top: var(--defaultPadding);

  .services-content {
    display: grid;
    gap: var(--indentSize-2);
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 720px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .services-item {
    box-sizing: border-box;
    border-radius: var(--radius);
    padding: var(--indentSize-2);
    transition: background var(--animTime), transform var(--animTime);


    &:hover {
      background: #ffffff17;
      transform: scale(1.03);
    }

    .item-text {
      h5 {
        font-weight: 400;
      }

      p {
        font-size: .8rem;
        font-weight: 300;
      }
    }

    .item-image {
      height: 3rem;
      overflow: hidden;
      object-fit: contain;
      border-radius: var(--radius);
    }
  }
}
</style>