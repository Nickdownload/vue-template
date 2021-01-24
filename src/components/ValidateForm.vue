<template>
    <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent,onUnmounted } from 'vue';
import mitt from 'mitt'
type FunProp = ()=>Boolean
export const emitter = mitt()
export default defineComponent({
  name: 'ValidateForm',
  setup(props,context){
    const submitForm =()=>{
     let bool=  callArr.map(Func=>Func()).every(item=>item)
      context.emit('formSubmit',bool)
    } 
    let callArr:FunProp[] =[]
      const callback = (e:any)=>{
        callArr.push(e)
      }
      emitter.on('form-item-created',callback)
    onUnmounted(()=>{
      emitter.off('form-item-created',callback)
    })
    return {
      submitForm
    }
  },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
