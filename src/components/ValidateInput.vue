<template>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">{{label}}</label>
  <input  class="form-control" 
  v-if="tag == 'input'"
  v-model="inputRef.val"
  v-bind="$attrs"
  @blur="validateInput"
  >
  
   <textarea
      v-else
      class="form-control"
      @blur="validateInput"
      v-model="inputRef.val"
      v-bind="$attrs"
    />
   <div v-if="error" style="display:block" class="invalid-feedback">
      {{message}}
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType ,ref,onMounted,computed,reactive} from 'vue';
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
    tag:{
      type:String,
      default:'input'
    },
    rules:{
      type: Array as PropType<RulesProp>
    }
  },
  setup(props,context){
    console.log(props)
     const inputRef = reactive({
      val: computed({
        get: () => props.modelValue || '',
        set: val => {
          context.emit('update:modelValue', val)
        }
      })
    })
    const message=ref('')
    const error =ref(false)
    
    const validateInput = (e:KeyboardEvent)=>{
        if(props.rules){
         let res= props.rules.every((item)=>{
            let passed
               message.value=item.message
               switch(item.type){
                   case 'email':
                  passed = (emailReg.test(inputRef.val))
                  break
                 case 'required':
                  passed = !(inputRef.val.trim()=='')
                  break
                 case 'custom':
                  passed = item.validator ? item.validator() :true
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
      inputRef,
      error,
      message
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
