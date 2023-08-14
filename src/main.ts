import { createApp } from 'vue'
import App from './App.vue'
import "./index.css";
import './assets/icon/iconfont.css'
import router from "./router";
import './package.d.ts' //包类型的声明
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/stackoverflow-light.css'  //导入代码高亮样式
import tooltip from './components/TipsTool/directive'
// import store from './store/index.js'
const app = createApp(App);
app.directive('highlight', function (el) { //自定义高亮样式 v-highlight
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block)
    })
})
// app.use(store)
app.use(tooltip)
app.use(router);
app.mount('#app')







