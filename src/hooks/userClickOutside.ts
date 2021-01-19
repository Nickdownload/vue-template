import { ref,onMounted,onUnmounted,Ref} from 'vue';

function userClickOutside(t:Ref< null|HTMLElement>){
   const isOpen =ref(false)
   const callback =(e:MouseEvent)=>{
    if(t.value){
      if(t.value.contains(e.target as HTMLElement)){
        isOpen.value=true
      }else{
        isOpen.value=false
      }
    }
  }
  onMounted(()=>{
    document.body.addEventListener('click',callback)
  })
  onUnmounted(()=>{
    document.body.removeEventListener('click',callback) 
  })
  return isOpen
}


export default userClickOutside