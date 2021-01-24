import {createRouter,createWebHistory} from 'vue-router'

const Home =()=> import(/*webpackChunkName:'Home'*/'@/views/Home.vue')
const Login = ()=>import(/*wbepackChunkName:'Login'*/'@/views/Login.vue')
const CreatePost = ()=>import(/*wbepackChunkName:'CreatePost'*/'@/views/CreatePost.vue')
const Column = ()=>import(/*wbepackChunkName:'Column'*/'@/views/Column.vue')
const SignUp = ()=>import(/*webpackChunkName:'SignUp'*/'@/views/Signup.vue')
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes:[
       {
           path:'/',
           name:'home',
           component:Home
       },
       {
           path:'/login',
           name:'login',
           component:Login
       },
       {
          path:'/signUp',
          name:'signUp',
          component:SignUp 
       },
       {
        path:'/create',
        name:'create',
        component:CreatePost
      },
      {
        path:'/column/:id',
        name:'createPost',
        component:Column
      }
    ]
})

export default router