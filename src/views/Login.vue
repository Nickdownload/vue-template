<template>
   <validate-form>
     <validate-input :rules="emailRules" v-model="email" label="邮箱" type="text" placeholder="请输入邮箱"></validate-input> 
     <validate-input :rules="passRules"  v-model="password" label="密码" type="password" placeholder="请输入密码"></validate-input> 
   </validate-form>
</template>

<script lang="ts">
import {ref, defineComponent } from 'vue';
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput,{RulesProp} from '../components/ValidateInput.vue'
 
export default defineComponent({
  name: 'Login',
  setup(){
   const email = ref(null)
   const password = ref(null)
   const emailRules:RulesProp =[
      {
         type:'required',
         message:'邮箱不能为空'
     },
       {
         type:'email',
         message:'邮箱不符合规范'
     }
    ]
    const passRules:RulesProp =[
      {
         type:'required',
         message:'密码不能为空'
     },
    ]
   return {
      email,
      password,
      emailRules,
      passRules
   }
  },
  components:{
     ValidateForm,
     ValidateInput, 
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>