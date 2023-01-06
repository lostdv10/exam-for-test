<template>
  <div>
    <MyHeader />
    <div id="record-test-container">
      <StudentInfo></StudentInfo>

      <div class="record">
        <div>
          <img src="./headset.jpg" alt="headset.jpg" />
          <div class="tip1">
            请您按照上图正确戴法所示戴好耳机，调整话筒位置，靠近嘴角两厘米左右，略低于嘴角话筒正面朝向嘴，录音过程中不要用手触碰话筒。
          </div>
          <!-- <div class="start-test">
          <div class="tip2">调整设备</div>
          <div class="tip3">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp现在开始话筒和耳机测试。请按照屏幕上的提示，戴好耳机，调整好话筒位置。准备好之后，请点击“开始测试”按钮。
          </div>
          <button class="start-test-btn">开始测试</button>
        </div> -->
          <!-- <div class="testing">
          <div>请按照提示读下面的句子：</div>
          <div>How are you? I'm fine.</div>
        </div>-->
          <div class="end-test">
            <div class="tip4">请按照提示读下面的句子：</div>
            <div class="tip5">How are you? I'm fine.</div>
            <div class="tip6">语音判分模块正常</div>
            <!-- <ul>
              <li><button>清晰</button></li>
              <li><button>重新测试</button></li>
              <li><button>不清晰</button></li>
              <li><button>退出</button></li>
            </ul> -->
            <!-- <audio></audio> -->
            <el-row class="mb-4">
              <!-- <el-button plain>Plain</el-button> -->
              <el-button @click="tanchu" type="primary" plain>清晰</el-button>
              <el-button @click="$alert('重新测试')" type="success" plain>重新测试</el-button>
              <el-button type="info" plain>不清晰</el-button>
              <el-button class="exit" type="warning" plain>退出</el-button>
              <!-- <el-button type="danger" plain>Danger</el-button> -->
            </el-row>
          </div>
        </div>
      </div>
      <!-- <video src="../../../public/resource/video/OUTPUT.webm" controls width="500" height="500" ></video> -->
		<!-- <audio src="../../../public/resource/audio/test.mp3" controls width="200" height="50" ></audio> -->
      <FooterInfo></FooterInfo>
    </div>



    <!-- <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>清晰</el-button>
      <el-button type="success" plain>重新测试</el-button>
      <el-button type="info" plain>不清晰</el-button>
      <el-button type="warning" plain>退出</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row> -->
    <el-icon color="#409EFC" class="no-inherit">
      <Share />
    </el-icon>
    <canvas id="test width=300" height="300">

    </canvas>
  </div>




</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MyHeader from "../../components/MyHeader/MyHeader.vue";
import StudentInfo from "../../components/StudentInfo/StudentInfo.vue";
import FooterInfo from "../../components/FooterInfo/FooterInfo.vue";
export default defineComponent({
  name: "RecordTest",
  components: {
    MyHeader,
    StudentInfo,
    FooterInfo,
  },
  setup() {
    let seatNum = ref(5); //座位号
    let candidateNumber = ref("1"); //考号
    let studentName = ref("2"); //学生姓名
    let volume = ref(80); //音量
    //和直接写在html中的$alert弹出的位置不一样
    function tanchu(){
      alert('清晰')
    }
    // let exitBtn=document.getElementsByClassName('exitBtn')
    // exitBtn[0].addEventListener('click',function(event) {
    //   console.log(event.target)
    // })
    var canvas = document.querySelector("#test");
			// if(canvas.getContext){
			// 	var ctx = canvas.getContext("2d");
			// }
    
    return {
      seatNum,
      candidateNumber,
      studentName,
      volume,
      tanchu,
    };
  },

  //canvas


  //组件内路由守卫

  // 通过路由规则，离开该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('About--beforeRouteEnter', to, from)
    if (localStorage.getItem('msg1') === 'atguigu') {
      next()
    } else {
      alert('学校名不对，无权限查看！')
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    // console.log('About--beforeRouteLeave', to, from)
    next()
  }


});
</script>

<style lang="less" scoped>
/* 主容器使用id，其他组件一般使用class */
#record-test-container {
  width: 970px;
  height: 700px;
  /* background-color: aquamarine; */
  display: flex;
  /* 排列不下则自动换到下面 */
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  margin: 0 auto;
  border: 15px rgb(0, 102, 238) solid;
}

/* 
font同时指定字体大小和字体族才有效
字体颜色使用前景色，不是在font中指定
 */
/* 耳机佩戴及测试提示 */
.record {
  width: 725px;
  height: 600px;
  position: relative;

  img {
    margin: 40px 65px;
  }

  .tip1 {
    width: 600px;
    line-height: 40px;
    background-color: rgb(254, 250, 239);
    margin: 20px auto;
  }

  .start-test {
    .tip2 {
      line-height: 40px;
      /* 简写时字体style和weight样式需要放在其他属性之前才会生效 */
      font: bold 20px 微软雅黑;
      /* font-weight: bold; */
      position: relative;
      margin-left: 60px;
    }

    .tip3 {
      width: 600px;
      line-height: 30px;
      color: darkred;

      margin: 20px 20px 20px 35px;
    }
  }

  .start-test-btn {
    margin-left: 285px;
  }

  .end-test {

    .tip4 {
      position: relative;
      font: bold 25px 微软雅黑;
      margin: 20px 60px;
    }

    .tip5 {
      color: darkred;
      font: 25px 楷体;
      margin: 20px 60px;
    }

    .tip6 {
      font: bold 25px 微软雅黑;
      margin: 20px 60px;
    }

    ul {
      display: flex;
      /* flex如何分配主轴空白区域 */
      justify-content: space-around;
      margin: 0 80px;
    }


  }
}
.mb-4{
  // margin-left:200px;
  margin:0 80px;
  display:flex;
  justify-content: space-around;

}
</style>
