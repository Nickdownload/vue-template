import { onUnmounted,createApp ,onBeforeMount} from 'vue'
import Message from '../components/Message.vue'
type MessageType= 'success'| 'error' | 'default'
const createMessage=(msg:string,type?:MessageType)=>{
    const div= document.createElement('div')
    div.id='model'
    onBeforeMount(()=>{
      document.body.appendChild(div)
    })
    const model= createApp(Message,{
        msg,
        type
     })
     model.mount('#model')
    //  setTimeout(()=>{
    //     document.body.removeChild(div)
    //  },2000)
     onUnmounted(()=>{
         model.unmount('#model')
         document.body.removeChild(div)
     })
}

export default createMessage