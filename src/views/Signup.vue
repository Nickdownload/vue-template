<template>
  <div class="signup-page mx-auto p-3 w-330">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="formData.email"
          placeholder="请输入邮箱地址"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">昵称</label>
        <validate-input
          :rules="nameRules"
          v-model="formData.nickName"
          placeholder="请输入昵称"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="formData.password"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">重复密码</label>
        <validate-input
          type="password"
          placeholder="请再次密码"
          :rules="repeatPasswordRules"
          v-model="formData.repeatPassword"
        />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">
          注册新用户
        </button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from 'axios'
import ValidateForm from "../components/ValidateForm.vue";
import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
export default defineComponent({
  name: "signUp",
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup() {
    const formData = reactive({
      email: "",
      nickName: "",
      password: "",
      repeatPassword: "",
    });
    const emailRules: RulesProp = [
      {
        type: "required",
        message: "邮箱不能为空",
      },
      {
        type: "email",
        message: "邮箱不符合规范",
      },
    ];
    const nameRules: RulesProp = [
      { type: "required", message: "昵称不能为空" },
    ];
    const passwordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
    ];
    const repeatPasswordRules:RulesProp= [
      {
        type:'custom' ,message:'两次密码不一致',
        validator:()=>{
          return formData.password ==formData.repeatPassword
        }
      }
    ]
    const onFormSubmit = (bool:Boolean)=>{
      if(bool){
          axios.post('/api/users',{
            "email": formData.email,
            "nickName": formData.nickName,
            "password": formData.password
          }).then(res=>{
            console.log(res)
          })
      }
      
    }
    return {
      emailRules,
      nameRules,
      passwordRules,
      formData,
      repeatPasswordRules,
      onFormSubmit
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>