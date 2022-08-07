<script setup>
import VWrapper from '../components/VWrapper.vue';
import { useCatalog } from '../stores/catalog';
import { useBasketStore } from '../stores/basket';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper'
import 'swiper/scss';
import "swiper/css/thumbs"
import { val } from 'dom7';
</script>
<template>
  <div class="product-page">
    <v-wrapper>
      <div class="product-container">
        <div class="image-container">
          <swiper 
            class="product-image" 
            :modules="modules"
            :thumbs="{ swiper: thumbsSwiper }"
          >
            <swiper-slide v-for="image in product.colors">
              <img :src="image.img" alt="">
            </swiper-slide>

          </swiper>
          <swiper 
            :slidesPerView="4"
            @swiper="setThumbsSwiper" 
            class="product-image-tumbs" 
            :modules="modules"
            :watchSlidesProgress="true"
            :spaceBetween="5"
          >
            <swiper-slide v-for="image in product.colors">
              <img :src="image.img">
            </swiper-slide>

          </swiper>
        </div>
            <!-- @input="formatPrice($event.target.value)"> -->

        <div class="product-title-block">
          <form action="" class="product-options" @submit.prevent="addToBasket()">
            <!---->
            <fieldset ref="inputRam" class="checkbox-group" @input="setRam($event.target.value)">
              <p>Выберите комплектацию</p>
              <label v-for="option in product.options" :for="option.ram">
                <input 
                  :id="option.ram" 
                  type="radio" 
                  name="ram" 
                  :value="option.ram"
                  :checked="option.ram == set.ram"
                >
                <p>{{ option.ram }}</p>
              </label>
            </fieldset>
            <!---->
            <fieldset ref="inputColor" class="checkbox-group" @input="setColor($event.target.value)">
              <p>Выберите цвет</p>
              <label v-for="color in product.colors" :for="color.name">
                <input 
                  :id="color.name" 
                  type="radio" 
                  name="color" 
                  :value="color.name"
                  :checked="color.name == set.color"
                >
                <p>{{ color.name }}</p>
              </label>
            </fieldset>
            <!---->
            <button type="submit" class="primary">Добавить в корзину</button>
          </form>
          <div>
            <div class="title">{{ product.title }}</div>
            <div class="price">{{ 
              new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                currencyDisplay: 'symbol',
                minimumFractionDigits: 0
                }).format(set.price) 
            }}</div>
          </div>
        </div>
        <div class="product-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, incidunt? Assumenda accusantium voluptatum
          officiis maiores modi recusandae delectus adipisci? Unde excepturi, vel odit quidem sapiente id? Adipisci
          doloribus maxime alias?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nam consequuntur temporibus neque accusantium
          voluptates blanditiis velit assumenda, fugit libero iure corrupti ad inventore facilis atque maiores cum
          explicabo deserunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ad, repellat tenetur nam natus adipisci
          facere! Quas, consequuntur vero. Autem dolor libero nostrum laudantium ducimus. Enim dolorum impedit
          perspiciatis necessitatibus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum commodi molestias vero, sit ipsum iure
          reprehenderit incidunt placeat, necessitatibus itaque omnis rerum nesciunt adipisci. Vel optio assumenda
          veniam minus deleniti!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, aperiam? Temporibus explicabo quos iusto ab
          iure accusamus id minima. Eos magni similique itaque, porro placeat rerum exercitationem molestiae provident
          ad?

        </div>
      </div>
    </v-wrapper>
  </div>
</template>


<script>
export default {
  data() {
    return {
      product: useCatalog()[this.$route.params.product].find(product => product.id == this.$route.params.productID),

      set: {
        ram: null,
        color: null,
        price: null
      },
     
      modules: [ Thumbs ],
      thumbsSwiper: null,

      basket: useBasketStore()
    }
  },
  created() {
    this.set = {
      ram: this.product.options[0].ram,
      color: this.product.colors[0].name,
      price: this.product.options[0].price
    }
  },

  methods: {

    setColor(value) {
      this.set.color = value
    },

    setRam(newRam) {
      this.set.ram = newRam
      this.set.price = this.product.options.find(i => i.ram == newRam).price
    },


    addToBasket() {
      const img = this.product.colors.find(i => i.name == this.set.color).img

      const product = {
        path: `${this.$route.path}`,
        img: img,
        title: `${this.product.title}, ${this.set.ram}, ${this.set.color}`,
        price: this.set.price,
        count: 1
      }

      this.basket.addProduct(product)
    },


    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
}
</script>


<style lang="scss" scoped>
.product-page {
  padding: var(--indentSize-2) 0;
  border-bottom: var(--border);
}
.product-container {
  gap: var(--indentSize-4);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
  "image title"
  "description description";

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    grid-template-areas:
    "image"
    "title"
    "description";
  }

  .image-container {
    width: 20rem;
    grid-area: image;

    @media (max-width: 820px) {
      margin: 0 auto;
    }
  }

  .product-image {
    border: var(--border);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      box-sizing: border-box;
      padding: var(--indentSize-2);
    }
  }

  .product-image-tumbs {
    margin-top: 5px;
    height: 5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      box-sizing: border-box;
      padding: var(--indentSize-1);
      border: var(--border);
      cursor: pointer;
    }
  }

  .product-title-block {
    gap: var(--indentSize-4);
    display: flex;
    grid-area: title;
    align-self: flex-start;
    justify-content: flex-start;

    @media (max-width: 820px) {
      gap: var(--indentSize-2);
      justify-content: center;
      flex-direction: column-reverse;

      .title {
        font-size: 2rem !important;
      }

      .price {
        font-size: 1.8rem !important;
      }
    }

    .title {
      font-size: 1.5rem;
    }

    .price {
      font-weight: 700;
      font-size: 1.2rem;
    }

    .product-options {
      gap: var(--indentSize-2);
      display: grid;

      .checkbox-group {
        display: flex;
        flex-direction: column;

        label {
          gap: var(--indentSize-1);
          display: flex;
          cursor: pointer;
          align-items: center;
        }
      }
    }
  }
  .product-description {
    grid-area: description;
  }
}

</style>

