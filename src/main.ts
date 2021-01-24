import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
     console.log(error)
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
   const {data} =response
    return data;
  }, function (error) {
     console.log(error)  
    return Promise.reject(error);
  });
createApp(App)
.use(router)
.use(store)
.mount('#app')
