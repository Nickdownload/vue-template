<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">开玩笑</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登陆</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">   
         <dropdown-menu :name="user.name"> 
        <dropdown-item>
          <a href="#" class="dropdown-item">新建文章</a>
        </dropdown-item>
        <dropdown-item disabled>
          <a href="#" class="dropdown-item">编辑资料</a>
        </dropdown-item>
        <dropdown-item>
          <a href="#" class="dropdown-item">退出登陆</a>
        </dropdown-item>
       </dropdown-menu>
        </li>
    
    </ul>
  </nav>
</template>
<script lang="ts">
import DropdownMenu from "./DropdownMenu.vue";
import DropdownItem from "./DropdownItem.vue";
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
});
</script>

<style>
</style>