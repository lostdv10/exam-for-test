<template>
  <!-- 答卷提交结果 -->
  <div>
    <MyHeader class="my-header"></MyHeader>
    <div id="submit-paper-container">
      <div class="submit-main">
        <div class="operate-help">答卷上传失败，请与监考老师联系</div>
        <div class="student-info">
          <img src="./student_image.jpg" alt="student_image.jpg">
          <!-- active是否存在取决于isActive的真假 -->
          <ul :calss="{ active: isActive }">
            <li>
              <p>考号：{{ examinationNumber }}</p>
            </li>
            <li>
              <p>姓名：{{ studentName }}</p>
            </li>
            <li>
              <p>座位号：{{ seatNum }}</p>
            </li>
          </ul>
        </div>

        <el-button class="upload" color="pink" float="right">手动上传</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import MyHeader from "../../components/MyHeader/MyHeader.vue";
// import StudentInfo from '../../components/StudentInfo/StudentInfo.vue'


export default defineComponent({
  name: "TestLine",
  components: {
    MyHeader,
    // StudentInfo,


  },

  setup() {
    let examinationNumber = ref(2);
    let studentName = ref(1);
    let seatNum = ref(5);
    let isActive = ref(true);

    //计算属性
    const firstName = ref('John')
    const lastName = ref('Doe')
    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value;
      },
      set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ')
      }
    })
    return {
      examinationNumber,
      studentName,
      seatNum,
      fullName,
      isActive,
    };
  },
});
</script>

<style lang="less" scoped>
/* 主容器使用id，其他组件一般使用class */
#submit-paper-container {
  width: 970px;
  height: 700px;
  /* background-color: aquamarine; */
  // display: flex;
  /* 排列不下则自动换到下面 */
  // flex-direction: row;
  // flex-wrap: wrap;

  position: relative;
  margin: 0 auto;
  border: 15px rgb(0, 102, 238) solid;

  .submit-main {
    width: 350px;
    height: 450px;
    position: relative;

    margin: 100px auto;
    border: 15px rgb(0, 102, 238) solid;
    .operate-help{
      text-align: center;
      color:green;
      font: bold 20px 微软雅黑;
      margin: 40px 0;
    }

    .student-info {
      display: flex;
      position: relative;
      justify-content:space-evenly;

      // background-color: bisque;
      position: relative;

      li {
        width: 100px;
        line-height: 30px;
        margin: 18px auto;
        background-color: antiquewhite;
      }



    }

  }
}
:deep(.el-button){
        
        color:red;
        margin-top: 100px;
        // margin-right: 30px;
        // float:right;
        position:absolute;
        right:30px;
        
      }

</style>
