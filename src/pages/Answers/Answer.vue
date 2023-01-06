<template>
  <div>
    <MyHeader class="my-header"></MyHeader>
    <div id="answer-container">
      <StudentInfo></StudentInfo>
      <div class="question-list">
        <!-- <ul>
          <li>题目 正确答案 你的答案 得分</li>
          <li>一、1 A - 0</li>
          <li>一、2 A - 0</li>
          <li>一、3 A - 0</li>
          <li>一、4 A - 0</li>
        </ul> -->
          <!-- <audio controls>
            <source src="./OUTPUT.mp3" type='audio/mpeg'> -->
          <!-- 这里需要指明type，否则无法播放 -->
          <!-- </audio> -->

        <el-table :data="answer" border style="width: 100%" size="small">
          <el-table-column prop="topic" label="题目" width="50">
          </el-table-column>
          <el-table-column prop="rightAnswer" label="正确答案" width="50">
          </el-table-column>
          <el-table-column prop="userAnswer" label="你的答案" width="50">
          </el-table-column>
          <el-table-column prop="score" label="得分">
          </el-table-column>
        </el-table>
      </div>
      <div class="answer-content">
        <div class="audio-record">
          <label for="">语音内容：</label>
          <button @click="audioPlay()">第一题音频</button>
          <button v-for="item in audios" @click="audioPlay(item)">
            第一题音频
          </button>


        </div>
        <div>
        </div>
        <div>
          <p class="topic">你听说你的同学有一个弟弟，于是你向他了解他弟弟的情况。请使用屏幕上的信息提出5个问题。</p>
          <ul>
            <li>名字</li>
            <li>年龄</li>
            <li>生日</li>
            <li>爱好</li>
            <li>喜欢的食物</li>
          </ul>
          <div>
          </div>
          <div>
            <label for="">每问得分：</label>
            <ul>
              <li>提问内容 得分</li>
              <li>名字 name</li>
              <li>年龄 age</li>
              <li>生日 birthday</li>
              <li>爱好 hobby</li>
              <li>喜欢的食物 food</li>
            </ul>
            <!-- <video src="./OUTPUT.mp4" controls width="400" height="300"></video> -->
          </div>
        </div>
      </div>
      <div class="my-footer">
        <div class="company">
          技术支持：南京听说科技有限公司
        </div>
        <button class="return-exercise" @click="returnExam">返回练习</button>
      </div>
    </div>

    <!-- 对话框尝试 -->
    <!-- <el-button text @click="openDialog1">打开嵌套表格的 Dialog</el-button>
          <el-dialog title="收货地址" v-show="dialogTableVisible">
            <el-table :data="gridData">
              <el-table-column property="date" label="日期" width="150"></el-table-column>
              <el-table-column property="name" label="姓名" width="200"></el-table-column>
              <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
          </el-dialog>

          <el-button text @click="dialogVisible = true">点击打开 Dialog</el-button>

          <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog> -->

    <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table> -->

    <!-- <img slot="conter" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<a slot="footer" href="http://www.atguigu.com">更多美食</a>
		<slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
		<slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot> -->

    <!-- <el-button  @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible="dialogVisible" width="30%" :append-to-body="true" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog> -->




  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import MyHeader from "../../components/MyHeader/MyHeader.vue";
import StudentInfo from "../../components/StudentInfo/StudentInfo.vue";

export default defineComponent({
  name: "Answer",
  components: {
    MyHeader,
    StudentInfo,

  },
  setup() {
    // let fd=fs.openSync("hello.txt","w");
    // fs.writeSync(fd,"今天天气真不错",2);
    // fs.closeSync(fd);
    // console.log('程序继续执行');
    function audioPlay(file: string | null) {
      let audio = document.querySelector("audio");
      audio?.play()
    }
    let audios = ['OUTPUT.mp3',]
    let gridData = ref([{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }])
    let tableData = gridData.value

    let answer=ref([
      {topic:'一、1',rightAnswer:1,userAnswer:'A',score:'0'},
      {topic:'一、2',rightAnswer:1,userAnswer:'A',score:'0'},
      {topic:'一、3',rightAnswer:1,userAnswer:'A',score:'0'},
      {topic:'一、4',rightAnswer:1,userAnswer:'A',score:'0'},
    ])



    function handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
    function returnExam() {
      console.log(this)
      this.$router.push({
        path: '/test-line',
      })
    }

    let dialogTableVisible = ref(true)
    let dialogFormVisible = ref(true)
    let dialogVisible = ref(true)
    function openDialog1() {
      dialogTableVisible.value = true
      console.log('test1')
    }

    return {
      audioPlay,
      audios,
      gridData,
      dialogTableVisible,
      dialogFormVisible,
      dialogVisible,
      handleClose,
      returnExam,
      openDialog1,
      tableData,
      answer,
    };
  },
});
</script>

<style lang="less" scoped>
.my-header {
  z-index: 0;
}

/* 主容器使用id，其他组件一般使用class */
#answer-container {
  width: 970px;
  height: 700px;
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

  position: relative;
  margin: 0 auto;
  border: 15px rgb(0, 102, 238) solid;

  .question-list {
    width: 210px;
    height: 600px;
    background-color: aquamarine;
    padding: 0 20px;

  }

  .answer-content {
    width: 420px;
    height: 600px;
    background-color: beige;
    padding: 0 30px;

    .audio-record {
      width: 100%;
      height: 55px;
    }

    .topic {}

  }

  .my-footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 40px 20px;

    .company {
      color: blue;
      font-weight: bold;
    }

    button.return-exercise {
      height: 35px;
      line-height: 35px;
      color: white;
      font-size: 20px;
      background-color: rgb(66, 192, 122);
    }

  }
}

.el-table{
  margin-top: 20px;
}
</style>
