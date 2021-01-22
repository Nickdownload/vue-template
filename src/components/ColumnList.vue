<template>
  <div class="row">
    <div class="col-4 mb-4" v-for="item in listColumn" :key="item.id">
      <div class="card h-100 shadow-sm" style="width: 18rem">
        <div class="card-body text-center">
           <img :src="item.avatar" class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.description }}</p>
          <router-link :to="{path:`/column/${item.id}`}" class="btn btn-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { ColumnProps } from "../App.vue";
export default defineComponent({
  name: "columnList",
  props: {
    list: {
      type: Array as PropType<Array<ColumnProps>>,
      required:true
    },
  },
  setup(props) {
    const listColumn= computed(()=>{
    return  props.list.map(item=>{
          if(!item.avatar){
            item.avatar= require('@/assets/logo.png')
          } 
          return item
      })
    })
    return {
      listColumn
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>