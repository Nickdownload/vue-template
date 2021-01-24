import {createStore} from 'vuex'
import axios from 'axios'
export interface ResponseType<P = {}> {
  code: number;
  msg: string;
  data: P;
}
export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}
export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
  column?: string;
  email?: string;
  avatar?: ImageProps;
  description?: string;
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps | string;
  createdAt?: string;
  column: string;
  author?: string | UserProps;
  isHTML?: boolean;
}

interface ListProps<P> {
  [id: string]: P;
}

export interface GlobalErrorProps {
  status: boolean;
  message?: string;
}
export interface GlobalDataProps {
  error?: GlobalErrorProps;
  token: string;
  loading?: boolean;
  columns?: { data: ListProps<ColumnProps>; currentPage: number; total: number };
  posts?: { data: ListProps<PostProps>; loadedColumns: string[] };
  user?: UserProps;
}

const store =createStore<GlobalDataProps>({
    state:{
       token:localStorage.getItem('token') || '',
       user:{
         isLogin:false
       },
       columns: { data: {}, currentPage: 0, total: 0 }
    },
    mutations:{
      login(state,data){
        state.token=data.token
        localStorage.setItem('token',data.token)
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
      },
      logOut(state){
        state.token=''
        state.user={
          isLogin:false
        }
        localStorage.removeItem('token')
        delete axios.defaults.headers.common.Authorization
      },
      getColumn(state,data){
        state.columns={
          currentPage:data.currentPage,
          data:data.list,
          total:data.count
        }
      },
      fetchCurrentUser(state,user){
        state.user={
          isLogin:true,
          ...user
        }
      }
    },
    actions:{
     async login({commit},payload){
       const res=  await axios.post('/api/user/login',payload)
       console.log(res)
       commit('login',res.data)
      },
      async fetchCurrentUser({commit}){
        const res = await axios.get('/api/user/current')
        commit('fetchCurrentUser',res.data)
      },
      loginAndFetch({dispatch},payload){
        dispatch('login',payload).then(()=>{
             dispatch('fetchCurrentUser') 
       })
      },
     async fetchColumn({commit},payload){
       const res =await axios.get('/api/columns',payload)
       commit('getColumn',res.data)
      } 
  }
})

export default store