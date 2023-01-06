<template>
  <div>
    <MyHeader class="my-header"></MyHeader>
    <div id="test-line-container">
      <StudentInfo isTestLineExercise></StudentInfo>
      <div>
      <div class="time-remain">00:07</div>
      <div class="test-paper">
        
        <div>
          第一部分&nbsp&nbsp&nbsp听力测试（共两节，15小题，每小题1分，满分15分）
          el-icon-monitor
          <i class="el-icon-monitor"></i>
          <el-icon :size="middle" :color="red">
            <edit></edit>
          </el-icon>
        </div>
        <div>
          第一节&nbsp&nbsp&nbsp听对话选择正确答案(共5小题，每小题1分，满分5分)
        </div>
        <div>
          听下面5段对话。每段对话后有一个小题，请从题中所给的A、B、C三个选项中，点击最佳选项。听完每段对话后，你都将有10秒钟时间来回答有关小题和阅读下一小题。每段对话听两遍。在听到"嘟”的提示音后，进入下一小题。
        </div>
        <ul class="part1">
          <li class="topic1">
            <!-- 是否可以做到：点到题选项上也可以选择，而不是只能点击前面的圆圈 -->
            <div>1.What's the girl's ID card number?</div>
            <ul>
              <li class="A">
                <input type="radio" name="topic1" value="A" />A. 7894327
                <el-radio v-model="radio1" label="1">A. 7894327</el-radio>
              </li>
              <li class="B">
                <input type="radio" name="topic1" value="B" />B. 7984237
                <el-radio v-model="radio1" label="2">B. 7984237</el-radio>
              </li>
              <li class="C">
                <input type="radio" name="topic1" value="C" />C. 7982347
                <el-radio v-model="radio1" label="3">C. 7982347</el-radio>
              </li>
            </ul>
          </li>
          <li class="topic2">
            <div>2.What's the girl's ID card number?</div>
            <ul>
              <li class="A">
                <input type="radio" name="topic2" value="A" />A. 7894327
              </li>
              <li class="B">
                <input type="radio" name="topic2" value="B" />B. 7984237
              </li>
              <li class="C">
                <input type="radio" name="topic2" value="C" />C. 7982347
              </li>
            </ul>
          </li>
          <li class="topic3">
            <div>3.What's the girl's ID card number?</div>
            <ul>
              <li class="A">
                <input type="radio" name="topic3" value="A" />A. 7894327
              </li>
              <li class="B">
                <input type="radio" name="topic3" value="B" />B. 7984237
              </li>
              <li class="C">
                <input type="radio" name="topic3" value="C" />C. 7982347
              </li>
            </ul>
          </li>
          <li class="topic4">
            <div>4.What's the girl's ID card number?</div>
            <ul>
              <li class="A">
                <input type="radio" name="topic4" value="A" />A. 7894327
              </li>
              <li class="B">
                <input type="radio" name="topic4" value="B" />B. 7984237
              </li>
              <li class="C">
                <input type="radio" name="topic4" value="C" />C. 7982347
              </li>
            </ul>
          </li>
          <li class="topic5">
            <div>5.What's the girl's ID card number?</div>
            <ul>
              <li class="A">
                <input type="radio" name="topic5" value="A" />A. 7894327
              </li>
              <li class="B">
                <input type="radio" name="topic5" value="B" />B. 7984237
              </li>
              <li class="C">
                <input type="radio" name="topic5" value="C" />C. 7982347
              </li>
            </ul>
          </li>
          <li class="topic6">
            <div>6.What's the girl's ID card number?</div>
            <ul>
              <li class="A">
                <input type="radio" name="topic6" value="A" />A. 7894327
              </li>
              <li class="B">
                <input type="radio" name="topic6" value="B" />B. 7984237
              </li>
              <li class="C">
                <input type="radio" name="topic6" value="C" />C. 7982347
              </li>
            </ul>
          </li>
          <li class="topic7">
            <div>7.What's the girl's ID card number?</div>
            <ul>
              <li class="A">
                <input type="radio" name="topic7" value="A" />A. 7894327
              </li>
              <li class="B">
                <input type="radio" name="topic7" value="B" />B. 7984237
              </li>
              <li class="C">
                <input type="radio" name="topic7" value="C" />C. 7982347
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
      <FooterInfo></FooterInfo>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MyHeader from "../../components/MyHeader/MyHeader.vue";
import StudentInfo from "../../components/StudentInfo/StudentInfo.vue";
import FooterInfo from "../../components/FooterInfo/FooterInfo.vue";

export default defineComponent({
  name: "TestLine",
  components: {
    MyHeader,
    StudentInfo,
    FooterInfo,
  },
  setup() {
    let radio1 = ref('radio1')
    // let isExercise=ref(false)
    // let ExamMode=ref('EXERCISE')
    let isTestLineExercise=ref(false)

    return {
      radio1,
      // isExercise,
      // ExamMode,
      isTestLineExercise,
    };
  },
});
</script>

<style lang="less" scoped>
.my-header {
  z-index: 0;
}

/* 主容器使用id，其他组件一般使用class */
#test-line-container {
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

  /* 剩余时间 */
  /* 目前暂时无法覆盖引入的vue */
  .time-remain {
    width: 96px;
    height: 30px;
    line-height: 30px;
    font-size: 25px;
    text-align: center;
    background-color: green;
    margin-left: 300px;
    z-index: 9;
  }

  /* 试卷 */
  .test-paper {
    width: 700px;
    height: 550px;
    margin: 10px 15px;
    overflow: auto;

    .A,
    .B,
    .C {
      margin: 10px auto;
    }
  }
}

.exercise-btn {
  float: left;
}
</style>
