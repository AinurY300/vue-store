import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')







// const r = [...document.querySelectorAll(".catalog_item")].map(el => {
//   let arr = {}
//   arr.title = el.querySelector('.dark_link span').textContent
//   arr.price = el.querySelector('.price_value').textContent.replace(/\s/g,'').replace('₽', '')
//   arr.img = el.querySelector('img').src
//   return arr
// })

// console.log(
//   JSON.stringify(r, null, 4)
// );

// .textContent.replace(/\s/g,'').replace('₽', '')