<template>
  <div class="hello">
  <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
         :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <validate-input
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">  发表文章</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput,{RulesProp} from '../components/ValidateInput.vue'
export default defineComponent({
  name: 'createPost',
  setup(){
     const titleVal = ref(null) 
     const contentVal = ref(null)
     const titleRules: RulesProp = [
      { type: 'required', message: '文章标题不能为空' }
    ]
     const contentRules: RulesProp = [
      { type: 'required', message: '文章详情不能为空' }
    ]
     return{
         titleVal,
         contentVal,
         titleRules,
         contentRules
     }
  },
  components:{
     ValidateForm,
     ValidateInput
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>