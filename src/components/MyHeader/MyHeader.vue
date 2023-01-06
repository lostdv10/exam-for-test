<template>
  <!-- 大多数界面都会用到，软件名和退出软件 -->
  <div id="header-container">
    <!-- <button type="submit"> -->
    <!-- <slot>
      默认插槽
    </slot> -->
  <!-- </button> -->
    <button @click="exit" id="exit">退出系统</button>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "MyHeader",
  props: {
    msg: String,
  },
  setup () {
//目前点击取消也会关闭窗口
    function exit() {
      window.close()
      if(confirm('你确定要关闭吗')){
        window.close()
      }
      else{}

    }
    return {
      exit,
    }
  }
})
</script>

<style lang="less" scoped>
#header-container {
  /* 有效区域固定为1000px */
  width: 1000px;
  height: 60px;
  background-image: url('./system_header.jpg');
  position: relative;
  margin: 0 auto;

  /* 退出按钮 */
  #exit {
    color: white;
    background-color: rgb(26, 87, 174);
    font-size: 25px;
    /* 开启float的地方尽可能顺带处理可能的高度塌陷 */
    float: right;
    clear: both;
    margin: 12px 20px;
    /* 隐藏边框 */
    border: transparent;
  }
}


/* 测试使用 */
/* .box1{
  width: 1000px;
  height: 100px;
  background-color:skyblue ;
  position: relative;
  left:0;
  top: 0;
  margin: 0 auto;
 }  */
</style>
