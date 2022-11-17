// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' // +++++
import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'
import './style.scss'
import App from './App.vue'
import router from './router'

createApp(App).use(ElementPlus, { locale: zhCn }).use(router).mount('#app')