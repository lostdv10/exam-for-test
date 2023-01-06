//hash模式
import { createRouter, createWebHashHistory} from 'vue-router'
import SearchJKJ from "../pages/SearchJKJ/SearchJKJ.vue"
import Login from "../pages/Login/Login.vue"
import RecordTest from "../pages/RecordTest/RecordTest.vue"
import TestLine from "../pages/TestLine/TestLine.vue"
import Answer from '../pages/Answers/Answer.vue'
import SubmitPaper from '../pages/SubmitPaper/SubmitPaper.vue'

// declare module 'vue' {
//   interface ComponentCustomOptions {
//     beforeRouteEnter?(to: Route, from: Route, next: () => void): void
//   }
// }

const routes = [
  //路由的默认路径
  {
    name: 'Home',
    path: '/',
    // redirect:'home',
    component: SearchJKJ,
  },
  {
    name: 'search-jkj',
    path: '/search-jkj',
    component: SearchJKJ,
    //独享路由守卫,特定路由切换时被调用
    beforeEach (to, from, next) {
      console.log('独享路由守卫', to, from)
      if (localStorage.getItem('school') === 'atguigu') {
        next()
      } else {
        alert('暂无权限查看')
      }
    }
  },
  {
    name: '/test-line',
    path: '/test-line',
    component: TestLine,
    meta: {
      title: '考试中',
      isAuth: 'true',
    },
  },
  {
    name: '/login',
    path: '/login',
    component: Login,
  },
  {
    name: '/record-test',
    path: '/record-test',
    component: RecordTest,
  },
  {
    name: '/answer',
    path: '/answer',
    component: Answer,
  },
  {
    name: '/submit-paper',
    path: '/submit-paper',

    component: SubmitPaper,
  }

]

//创建路由对象
const router = createRouter({
  // createWebHashHistory()是使用hash模式路由
  // createWebHistory()是使用history模式路由
  history: createWebHashHistory(),
  routes: routes,
})

//全局路由守卫-初始化，每次路由切换调用
router.beforeEach((to, from, next) => {
  // console.log('前置路由守卫', to, from)
  if (to.meta.isAuth) {
    if (localStorage.getItem('msg1') === 'atguigu') {
      next()
    }
    else {
      alert('学校名不对，无法查看')
    }
  }
  else {
    next()
  }
})

//全局后置路由守卫-初始化调用，每次路由切换后调用
router.afterEach((to, from) => {
  // console.log('后置路由守卫', to, from)
  //报错不能将unknown分配给string,可使用 断言 解决
  document.title = to.meta.title as string || '考试系统'
})



export default router