<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link to="/" class="navbar-brand" href="#">开玩笑</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login"  href="#" class="btn btn-outline-light my-2">登陆</router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="/signUp"  href="#" class="btn btn-outline-light my-2">注册</router-link>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">   
         <dropdown-menu :name="user.nickName"> 
        <dropdown-item>
          <router-link class="dropdown-item" to="/create">新建文章</router-link>
        </dropdown-item>
        <dropdown-item disabled>
          <a href="#" class="dropdown-item">编辑资料</a>
        </dropdown-item>
        <dropdown-item>
          <a href="#" @click.prevent="logOut" class="dropdown-item">退出登陆</a>
        </dropdown-item>
       </dropdown-menu>
        </li>
    
    </ul>
  </nav>
</template>
<script lang="ts">
import DropdownMenu from "./DropdownMenu.vue";
import DropdownItem from "./DropdownItem.vue";
import {useStore } from 'vuex'
export interface UserProps {
  isLogin: Boolean;
  name?: string;
  id?: number;
}
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Dropdown",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  components: {
    DropdownMenu,
    DropdownItem,
  },
  setup(){
    const store = useStore()
    const logOut = ()=>{
       store.commit('logOut')
    }
    return {
      logOut
    }
  }
});
</script>

<style>
</style>