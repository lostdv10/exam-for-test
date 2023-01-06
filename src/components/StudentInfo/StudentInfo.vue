<template>

  <div class="student-info">
    <!-- <img class="student-image" src="./student_image.jpg" alt="student_image.jpg" /> -->
    <div class="student-image"></div>
    <ul>
      <li @click="open">考生{{ studentName }}</li>
      <li>考号{{ candidateNumber }}</li>
      <li>座位{{ seatNum }}</li>
    </ul>
    <div class="exercise-btn" v-show="btnShow">
      <el-button class="btn" @click="open" text>
        上一题
      </el-button>
      <button @click="open">tesyud</button>
      <el-button class="btn">
        下一题
      </el-button>
      <el-button class="btn" @click="goToAnswer">查看答案</el-button>
    </div>
    <!-- <button @click="goToAnswer">跳转</button>
    <el-button @click="goToAnswer">查看答案</el-button> -->

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {useRouter } from 'vue-router'

export default defineComponent({
  name: "StudentInfo",
  props:{
    isTestLineExercise:Boolean,

  },
  setup(props,{attrs,slots,emit}) {//后面的参数也可以写作context
    //attrs：值为对象，包含组件外部传递过来，但没有在props配置中声明的属性。相当于this.$attrs
    //slots：收到的插槽内容，相当于this.$slots
    //emit：分发自定义事件的函数，相当于this.$emit
    let seatNum = ref(5); //座位号
    let candidateNumber = ref("1"); //考号
    let studentName = ref("2"); //学生姓名
    let btnShow = ref(false)//默认为false
    if(props.isTestLineExercise && props.isTestLineExercise === true){
      btnShow.value=true
    }


      //  function open(){
      //   alert('tesy')
      //  }
        function open() {
        // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning',
        //   center: true
        // }).then(() => {
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!'
        //   });
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });
        // });
          console.log(this)
      }
      const open1=()=>{
        console.log(this)
      }

    const router=useRouter()
    const goToAnswer = () =>{
      console.log('控制台输出测试')
      router.push({
        path: '/answer',
      })
    }
    return {
      seatNum,
      candidateNumber,
      studentName,
      goToAnswer,
      btnShow,
      open,

    };
  }
});
</script>

<style lang="less"  scoped>
/* 左侧学生信息 */
.student-info {
  width: 235px;
  height: 600px1;
  background-color: bisque;
  position: relative;

  .student-image {
    width: 130px;
    height: 150px;
    background-image: url('../../assets/student_image.jpg');
    background-repeat: no-repeat;
    margin: 50px;
  }

  .exercise-btn {
    display: flex;
    /* 排列不下则自动换到下面 */
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .btn {
      margin: 20px auto;
    }
  }

  ul {
    margin: 0 auto;

    li {
      width: 200px;
      line-height: 40px;
      margin: 9px auto;
      background-color: antiquewhite;
    }
  }
}


</style>
