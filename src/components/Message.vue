<template>
  <teleport to="#model">
  <div :class="className" class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2" role="alert">
    <strong> {{msg}} </strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent,PropType,computed,} from 'vue';
type MessageType= 'success'| 'error' | 'default'
export default defineComponent({
  name: 'message',
  props:{
     msg:{
         type:String,
         required:true
     },
     type:{
         type:String as PropType<MessageType>,
         default:'default'
     }
  },
  setup(props){
      const className = computed(()=>{
          if(props.type == 'success'){
              return 'alert-success'
          }
          if(props.type == 'error'){
              return 'alert-danger'
          }
          return 'alert-primary'
      })
      return {
          className
      }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>