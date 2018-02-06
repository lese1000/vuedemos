import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(Router)



//简写方式
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Index',
//       component: Index
//     },{
//       path: '/content/:id',
//       name: 'Content',
//       component: Content
//     }
//   ]
// })

const routes =  [
  {
    path: '/',
    name: 'Index',
    component: Index
  },{
    path: '/content/:id',
    name: 'Content',
    component: Content,
    meta:{
      requireAuth:true
    }
  }
];

const router = new Router({
  routes:routes
});


router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        // if (checkCookie('username')) {  // 判断是否存在用户cookie，登录成功后需要保存到cookie。
        //     next();
        // }
        // else {
        //     next({
        //         path: '/',
        //         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        //     })
        // }
        console.log(">>>>> need login <<<<<<");
        next();
    }
    else {
        next();
    }
})
/**
每个钩子方法接收三个参数：
* to: Route: 即将要进入的目标 路由对象
* from: Route: 当前导航正要离开的路由
* next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
* next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
* next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
* next(‘/’) 或者 next({ path: ‘/’ }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

确保要调用 next 方法，否则钩子就不会被 resolved。
**/





export default router
