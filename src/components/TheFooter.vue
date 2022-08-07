<template>
  <footer class="footer">
    <v-wrapper>
      <div class="footer-logo">
        <p>Project Vue</p>
      </div>
      <div class="footer-content">
        <!-- Блок подписки на рассылку -->
        <div class="subscription">
          <p>Получи скидку до 10% на первую покупку за подписку на нашу рассылку</p>
          <form method="POST" class="subscription-input">
            <input type="email" placeholder="Электронная почта" autocomplete="none">
            <button>Подписатся</button>
          </form>
        </div>
        <!---->
        <ul class="footer-list">
          <p class="list-title">О компании</p>
          <li class="list-item"><a href="">Акции</a></li>
          <li class="list-item"><a href="">Гарантия</a></li>
          <li class="list-item"><a href="">Доставка</a></li>
          <li class="list-item"><a href="">Политика возврата</a></li>
          <li class="list-item"><a href="">Политика конфиденциальности</a></li>
        </ul>
        <div class="footer-contact">
          <p style="font-weight: 700">Контакты</p>
          <p>support@store.ru</p>
          <p class="contact-title">+7 (999) 000-00-00</p>
          <p class="contact-description">
            Бесплатная консультация
            с 10:00 до 21:00, без выходных
          </p>
        </div>
      </div>
    </v-wrapper>
  </footer>
</template>

<script setup>
import VWrapper from './VWrapper.vue';
</script>

<style lang="scss">
.footer {
  padding: var(--indentSize-4) 0;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: var(--indentSize-2);

  @media (max-width: 840px) {
    flex-direction: column;

    .subscription {
      padding-right: 0 !important;
      border: none !important;
    }

    .footer-contact {
      margin: 0;
      padding-top: var(--indentSize-1);
      border-top: var(--border);
    }
  }
}

.footer-logo {
  display: flex;
  font-size: 2rem;
  margin-bottom: 1rem;
  align-items: center;

  img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
  }
}

.footer-list {
  .list-title {
    font-weight: 700;
  }
}

.footer-contact {
  flex-basis: 20%;

  margin-left: auto;

  .contact-title {
    font-size: 1.5rem;
  }

  .contact-description {
    font-size: .9rem;
    font-weight: 300;
  }
}

.subscription {
  flex: 0 0 40%;
  box-sizing: border-box;
  border-right: var(--border);
  padding-right: var(--indentSize-2);

  @media (max-width: 340px) {
    text-align: center;

    .subscription-input {
      flex-direction: column;
    }
  }

  p {
    margin-bottom: 1em;
  }


  .subscription-input {
    display: flex;
    gap: var(--indentSize-1);
  }
}
</style>