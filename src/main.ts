import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.get('/api/columns').then(res=>{
    console.log(res)
})
createApp(App)
.use(router)
.use(store)
.mount('#app')
