<template>
  <div class="dropdown" ref="dropdown">
  <button @click="open" class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    您好 {{name}}
  </button>
  <ul class="dropdown-menu"  :style="{display:'block'}" aria-labelledby="dropdownMenuButton" v-if="isOpen">
    <slot></slot>
  </ul>
</div> 
</template>

<script lang="ts">
import { defineComponent,ref,watch} from 'vue';
import userClickOutside from '@/hooks/userClickOutside'
export default defineComponent({
  props:{
    name:String
  },
  setup(){
    const isOpen=ref(false)
    const dropdown=ref<null | HTMLElement>(null)
    const isClickOutside  =userClickOutside(dropdown)
    const open=()=>{
      isOpen.value=!isOpen.value
    }
    watch(isClickOutside ,(newVal,oldVal)=>{
      if(!newVal && isOpen.value){
        isOpen.value=false
      }
    })
    return {
      isOpen,
      open,
      dropdown
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>