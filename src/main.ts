import { createApp } from 'vue'
import {createPinia} from 'pinia'
import * as $ from 'jquery'

//完整引入Element-Plus部分
// import ElementPlus from 'element-plus'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'//element-plus图标
import i18nPlugin from './plugins/i18n'
import MessageBox from './components/MessageBox/MessageBox.vue'
// import store  from './store/store'
import router from './router/router'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'


import App from './App.vue'

import './index.css'

const app = createApp(App)
// const express=require('express')
// app.use(express)



// app.use(ElementPlus, 
//   {
//   locale: zhCn,
// }
// )
//element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
const pinia=createPinia()
app.use(pinia)
window.$ = $
// app.use(sql)
// app.use($)
app.component('MessageBox',MessageBox)//全局注册组件
// app.use(store)
// 使 v-focus 在所有组件中都可用
app.directive('focus', {
  mounted: (el) => el.focus()
})
//插件尝试
app.use(i18nPlugin,{
  greetings:{
    hello:'Bonjour!'
  }
})



app.use(router)
app.mount('#app')

