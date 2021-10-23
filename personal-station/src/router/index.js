/*
 * @Author: your name
 * @Date: 2021-10-19 10:40:11
 * @LastEditTime: 2021-10-19 14:09:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-station\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',  // 使用redirct 进行重定向, 将路径 /重定向到 /home 路径
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        title:'yhz-home'
      },
      component: Home   // component属性：路由懒加载，避免一开始就加载全部的静态资源，加载时间过长，页面出现空白现象
    }
  ]
})

// 利用导航守卫-在切换路由时完成页面标题的修改
router.beforeEach((to, form, next) => {
  window.document.title = to.meta.title
  next()
})

export default router


