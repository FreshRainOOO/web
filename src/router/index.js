// 导入router所需的方法
import { createRouter, createWebHistory } from "vue-router";
// import store from "../store";
// 导入路由页面的配置
import routes from "./routes";
import App from "@/App.vue"
// 路由参数配置
const router = createRouter({
  // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
  history: createWebHistory(),
  routes: routes,
});

// 全局前置守卫，这里可以加入用户登录判断
router.beforeEach((to, from, next) => {
  console.log('App',window.renderLoadingDom);
  window.renderLoadingDom()
  // store.commit("goNewpage");
  if (to.fullPath.split("/").length > 2) {
    //一级路由不保存
    let historyPages = JSON.parse(localStorage.getItem("historyPages"));
    const toPage = { name: to.name.split("/").at(-1), path: to.fullPath };
    historyPages || (historyPages = []); //没有的话,给个空数组
    historyPages.find((item) => item.path == toPage.path) ||
      historyPages.unshift(toPage); //如果原数组没有当前路由,添加到头部;
    historyPages.length > 5 && historyPages.pop(); //长度大于5,删除尾
    localStorage.setItem("historyPages", JSON.stringify(historyPages));
  }

  // 继续前进 next()
  // 返回 false 以取消导航
  next();
});

// 全局后置钩子，这里可以加入改变页面标题等操作
router.afterEach((to, from) => {
  const _title = to.meta.title;
  if (_title) {
    window.document.title = _title;
  }
});

// 导出默认值
export default router;
