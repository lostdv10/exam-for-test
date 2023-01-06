<template>
  <div>
    <MyHeader />
    <div id="search-jkj-container">
      <div class="seat">座位号:{{ seatNum}}</div>
      <!-- <div>座位号:{{ num }}</div> -->
      <div class="juzhong">
        <!-- <button @click="getAxios">控制台输出句子</button> -->


        <label class="operator-hint">请双击选择监考老师指定的监考机</label><br />
        <div class="list-header" for="">监考机列表</div>
        <div class="jkj-list">
          <ul>
            <!-- <li>锦州二合一-G</li>
            <li>锦州二合一-G</li>
            <li>锦州二合一-G</li> -->
            <li v-for="(item,index) in jkjList">{{item.name}}</li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,computed, reactive } from 'vue'
import { useCounterStore1 } from '../../store/counter'
// import {useStore, mapState} from 'vuex'
import axios from 'axios'
import MyHeader from "../../components/MyHeader/MyHeader.vue";

export default defineComponent({
  name: 'SearchJKJ',
  components: {
    MyHeader,
  },
  setup() {
    // const store = useStore()
    let seatNum = ref(5)
    // const num=computed(()=>store.state.num)
    //pinia使用示例
    const counter=useCounterStore1();
    counter.count++;
    // counter.$patch({count:counter.count+1})
    counter.increment()
    let jkjList= ref([
      {name:'衢州监考机',ip:'192.168.1.1'},
      {name:'江苏监考机',ip:'192.168.1.2'},
      {name:'襄阳监考机',ip:'192.168.1.3'},
    ])
    

    function getAxios() {
      console.log('我是getAxios函数')
      console.log(counter)
      axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          console.log('请求成功了', response.data)
        },
        error => {
          console.log('请求失败了', error.message)
        }
      )
    }
    

    return {
      seatNum,
      // getstudent,
      getAxios,
      // num,
      jkjList
    }

    //双击监考机名称跳转
  }
})
</script>

<style lang="less" scoped>
/* 主容器使用id，其他组件一般使用class */
#search-jkj-container {
  width: 970px;
  height: 700px;
  /* background-color: aquamarine; */
  position: relative;
  margin: 0 auto;
  border: 15px rgb(0, 102, 238) solid;

  /* 
font同时指定字体大小和字体族才有效
字体颜色使用前景色，不是在font中指定
 */
  div.seat {
    color: blue;
    font-size: 75px;
    font-weight: bold;
    /* font:italic 75px ; */
    position: relative;
    top: 40px;
    left: 20px;
  }

  div.juzhong {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 90px;
  }

  label.operator-hint {
    color: blue;
    /* background-color: aqua; */
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
  }

  div.list-header {
    width: 395px;
    height: 35px;
    color: green;
    background-color: rgb(216, 221, 217);
    font-size: 25px;
    font-family: 隶书;
    /* 以下为字体在组件中左右和上下居中 */
    text-align: center;
    line-height: 35px;
    position: relative;
    margin-top: 30px;
  }

  .jkj-list {
    width: 395px;
    height: 275px;
    background-color: #bfa;
    /* 若可搜索到的监考机数量过多，添加滚动条，否则不添加, */
    overflow: auto;

    li {
      color: blue;
      font: 30px 宋体;
      position: relative;
      top: 0px;
    }
  }
}
</style>
