<template>
     <li :class=" disabled ? 'disabled' : '' " ><slot></slot></li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DropdownItem',
  props:{
    disabled:{
      type:Boolean,
      default:false,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .disabled{
   color: #6c757d;
  pointer-events: none;
  user-select: none;
  background-color: transparent;
 }
</style>