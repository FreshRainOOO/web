import mdFiles from "@/markdowns/list.ts";
const routeMarkdown = () => {
  let arr = [];
  for (const path in mdFiles) {
    const pathName = path.slice(2, -3); //将前缀与.md去除; web-design/animejs
    // console.log(pathName);
    arr.push({
      path: encodeURI(pathName),
      name: pathName,
      component: () => import("@/views/blogs/index.vue"), //指向同一个组件,组件内部再动态引入
    });
  }
  console.log(arr);
  return arr;
};

const routes = [
  {
    path: "/",
    name: "index",
    title: "首页",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/test",
    name: "测试",
    title: "测试",
    component: () => import("@/views/test/test.vue"),
  },
 
  {
    path: "/blog",
    name: "记录",
    title: "记录",
    children: routeMarkdown(),
  },
  {
    path: "/laboratory",
    name: "实验室",
    title: "实验室",
    children: [
      {
        path: "/laboratory",
        redirect: "/laboratory/hoverList",
      },
      {
        path: "hoverList",
        name: "悬浮砖",
        title: "悬浮砖",
        component: () => import("@/views/laboratory/hoverList/index.vue"),
      },
      {
        path: "codePen",
        name: "键盘输入效果",
        title: "键盘输入效果",
        component: () => import("@/views/laboratory/codePen/index.vue"),
      },
      {
        path: "starSky",
        name: "ball",
        title: "ball",
        component: () => import("@/views/laboratory/starSky/index.vue"),
      },
      {
        path: "grain",
        name: "粒子切换",
        title: "粒子切换",
        component: () => import("@/views/laboratory/grain/index.vue"),
      },
    ],
  },
];
export default routes;
