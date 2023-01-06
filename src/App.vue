<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->

  <!-- <SearchJKJ></SearchJKJ> -->
  <!-- <Login></Login> -->
  <!-- <RecordTest></RecordTest> -->
  <!-- <TestLine></TestLine> -->
  <!-- <Answer></Answer> -->
  <!-- <SubmitPaper></SubmitPaper> -->
  <div>
    <!-- <input ref="el1"> -->
  </div>
  <div class="router1">


    <router-link to='/search-jkj'> --SearchJKJ++ </router-link>
    <router-link to='/login'> --Login++ </router-link>
    <router-link to='/record-test?id=${m.id}&title=${m.tiltle}'> --RecordTest++ </router-link>
    <!-- <li v-for="m in messageList" :key="m.id"> -->
      <!-- <router-link to='/record-test?id=${m.id}&title=${m.tiltle}'>--RecordTest++</router-link> -->
      <!-- 路由推荐使用下面的写法 -->
      <!-- <router-link to="{
    path:'/answer',
    query:{
      id:m.id,
      title:m.title
    }
  }">--Answer++</router-link> -->
    <!-- </li> -->
    <router-link to="/test-line"> --TestLine++ </router-link>
    <router-link to='/answer'> --Answer++ </router-link>
    <router-link to='/submit-paper'> --SubmitPaper++ </router-link>

  </div>
  <!-- <button @click="goTestLine">跳转到TestLine</button> -->
  <router-view></router-view>
</template>


<script lang="ts">
import { defineComponent, provide, ref, inject, onMounted } from "vue"
import type { InjectionKey } from "vue";
import { RouterLink, RouterView } from "vue-router";
// import {useRouter,useRoute} from "vue-router"
// import HelloWorld from './components/HelloWorld.vue'
// import SearchJKJ from "./pages/SearchJKJ/SearchJKJ.vue"
import Login from "./pages/Login/Login.vue"
// import RecordTest from "./pages/RecordTest/RecordTest.vue"
// import TestLine from "./pages/TestLine/TestLine.vue"
// import Answer from './pages/Answers/Answer.vue'
// import SubmitPaper from '../pages/SubmitPaper/SubmitPaper.vue'

export default defineComponent({
  name: "App",
  components: {
    // HelloWorld,
    // SearchJKJ,
    Login,
    // RecordTest,
    // TestLine,
    // Answer,
    // SubmitPaper,
  },
  setup() {
    let seatNum = ref(5);
    let messageList=ref([
      { id: '001', title: '消息001' },
      { id: '002', title: '消息002' },
      { id: '003', title: '消息003' },
    ])
    let person = { name: "JOJO", age: 20 };
    //本地存储
    const addLocalItem = function () {
      localStorage.setItem('msg1', 'atguigu')
      localStorage.setItem('msg2', JSON.stringify(person))
    }();
    const readLocalItem = function () {
      console.log('msg1=' + localStorage.getItem('msg1'))
      console.log('msg2=' + localStorage.getItem('msg2'))
    }();


    //编程式路由导航，可以不用RouterLink
    //疑问：setup中这里使用了this
    function goTestLine() {
      console.log("这是App的gotoline",this)
      this.$router.push({
        path: '/test-line',
      })
    }

    // let isAuthenticated=false;
    //ts类型检查
    const key = Symbol() as InjectionKey<string>
    provide(key, 'foo')// 若提供的是非字符串值会导致错误
    const foo1 = inject(key)//foo 的类型：string | undefined
    const foo2 = inject<string>('foo') // 类型：string | undefined
    const foo3 = inject<string>('foo', 'bar') // 类型：string
    const foo4 = inject('foo') as string
    const el1 = ref<HTMLInputElement | null>(null)
    const modal = ref<InstanceType<typeof Login> | null>(null)

    // const openModal = () => {
    //   modal.value?.open()
    // }


    onMounted(() => {
      el1.value?.focus()
    })


    return {
      seatNum,
      // isAuthenticated,
      messageList,
      goTestLine,
    };
  },
  data() {
    let isAuthenticated = false;
    return {
      isAuthenticated,
    }
  },

  /*
  数据data命名采用第一个单词小写，后面的单词首字母大写，若firstName
  类名命名采用-连接，如main-container
  src下的一级文件夹名称小写，如pages，二级所有单词首字母大写,如MyHeader
  资源文件使用_连接，所有字母小写，如system_header.jpg
  主容器使用id，其他组件一般使用class
  z-index取值范围为[0,9],即0<=z-index<=9
  三种模式命名：练习模式EXERCISE,校内考试QUIZ,大型考试/统考SCALEEXAM(单词连接可能改变，可以搜索scale)
  默认为校内考试QUIZ

  */
});
</script>

<style lang="less" scoped>
.router1 {
  line-height: 40px;
  margin-left: 20px;
  // width: 1000px;
  // height: 600px;
  background-color: aquamarine;
  // margin-top: 300px;
  // margin-left:150px ;
}

router-link {
  font: 20px 微软雅黑;
  color: deeppink;
}
</style>