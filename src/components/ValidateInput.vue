<template>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">{{label}}</label>
  <input  class="form-control" 
  v-bind="$attrs"
  v-model="val"
  @blur="validateInput"
  >
   <div v-if="error" style="display:block" class="invalid-feedback">
      {{message}}
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType ,ref,onMounted} from 'vue';
import {emitter} from './ValidateForm.vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
interface RuleProp {
  type: 'required' | 'email' | 'custom';
  message: string;
  validator?: () => boolean;
}
export type RulesProp = RuleProp[]
export default defineComponent({
  name: 'ValidateInput',
  inheritAttrs:false,
  props:{
    label:String,
    modelValue:String,
    rules:{
      type: Array as PropType<RulesProp>
    }
  },
  setup(props,context){
    console.log(props)
    const val =ref('')
    const message=ref('')
    const error =ref(false)
    
    const validateInput = (e:KeyboardEvent)=>{
        if(props.rules){
         let res= props.rules.every((item)=>{
            let passed
               message.value=item.message
               switch(item.type){
                   case 'email':
                  passed = (emailReg.test(val.value))
                  break
                 case 'required':
                  passed = !(val.value.trim()=='')
                  break
               
                 default:
                   passed=true;
                  return   
               }
               error.value=!passed
               return passed
          })
          return res
        }
       return true
    } 
    onMounted(()=>{
      emitter.emit('form-item-created',validateInput)
    })
    return {
      validateInput,
      ref,
      val,
      error,
      message
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
