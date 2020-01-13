/* eslint-disable eol-last */
import Vue from 'vue'
import Router from 'vue-router'
// import findLast from "lodash/findLast";

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: 'layout' */ '../layouts/BasicLayout'),
      children: [
        {
          path: '/',
          redirect: '/index'
        },
        {
          path: '/index',
          name: 'home',
          meta: { title: '首页', icon: 'home' },
          component: () => import(/* webpackChunkName: "home" */'../views/home/index.vue')
        }
      ]
    },
    {
      path: '/question',
      component: () => import(/* webpackChunkName: "layout" */ '../layouts/BasicLayout'),
      children: [
        {
          path: '/question',
          redirect: '/question/index'
        },
        {
          path: '/question/index',
          name: 'question',
          meta: { title: '答题&问卷', icon: 'appstore' },
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/question',
              redirect: '/question/analysis'
            },
            {
              path: '/question/analysis',
              name: 'quesAnalysis',
              meta: { title: '数据分析', icon: 'pie-chart' },
              component: () => import(/* webpackChunkName: 'question' */ '../views/question/analysis.vue')
            },
            {
              path: '/question/edit',
              name: 'quesEdit',
              meta: { title: '编辑&新增', icon: 'edit' },
              component: () => import(/* webpackChunkName: 'question' */ '../views/question/add.vue')
            },
            {
              path: '/question/index',
              name: 'quesIndex',
              meta: { title: '题目列表', icon: 'bars' },
              component: () => import(/* webpackChunkName: 'question' */ '../views/question/list.vue')
            }
          ]
        }
      ]
    }
  ]
})
export default router