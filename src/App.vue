<template>
<div class="container">
  <global-header :user="user"></global-header>
  <router-view></router-view>
  <footer class="text-center py-4 text-secondary bg-light mt-auto">
    <small>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">© 2020 者也专栏</li>
        <li class="list-inline-item">课程</li>
        <li class="list-inline-item">文档</li>
        <li class="list-inline-item">联系</li>
        <li class="list-inline-item">更多</li>
      </ul>
    </small>
  </footer>
 <!-- <login /> -->
 <!-- <column-list :list="columns"></column-list> -->
</div>
</template>

<script lang="ts">
import { defineComponent ,computed} from 'vue';
import Message from './components/Message.vue'
import {useStore} from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader ,{UserProps} from './components/Header/GlobalHeader.vue'
import createMessage from './views/CreateMessage'
import Login from './views/Login.vue'
export interface ColumnProps{
  id:Number;
  title:String;
  description:String;
  avatar?:string
}

export default defineComponent({
  name: 'App',
  components: {
   GlobalHeader,
   Login,
   Message
  },
  setup(){
    createMessage('error','success')
    const currentPage=1
    const pageSize = 5
    const store = useStore()
    store.dispatch('fetchColumn',{
      currentPage,
      pageSize
    })
    const user = computed(()=>store.state.user)
    return {
      user
    }
  }
});
</script>

<style>

</style>
