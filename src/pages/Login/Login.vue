<template>
  <div>
    <MyHeader class="my-header">插槽</MyHeader>

    <div class="login-container">
      <div>
        <!-- <input type="text" v-focus @click="handleChange">
        <div v-demo="{ color: 'white', text: 'hello!' }"></div>
        <p>Message is {{ message }}</p>
        <input v-model="message" placeholder="edit me">
        <p style="white-space: pre-line;">{{ message }}</p> -->
        <!-- <textarea v-model="message" placeholder="add multiple lines"></textarea> -->
        <!-- <my-vue-element></my-vue-element> -->
        <!-- <input type="radio" id="male" name="sex" checked /><label for="male">北京市东城区</label>
        <input type="radio" id="female" name="sex" /><label for="female">北京市西城区</label> -->
        <!-- <a-icon type="plus-square" @click="uploadMaterial()" />
        <input type="file" style="display:none" ref="file" @click="e => { e.target.value = ''; }"
          @change="getFileData" /> -->
        <!-- <button id="test1">test1</button> -->
        <!-- <div style="border:2px solid black;border-radius:3px;padding:5px;display:inline-block" draggable="true" id="drag">拖动我</div> -->
        <!-- <p>Hit Alt+Shift+I on Windows, or Opt+Cmd+I on mac to see a message printed to the console.</p>
        <div id="holder">
          Drag your file here
        </div> -->
        <!-- el-input暂时无法输入 -->
        <!-- <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button @click="openfile">打开文件</el-button>
        <el-rate :v-model="value" :icon-classes="iconClasses" void-icon-class="icon-rate-face-off"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <el-button type="primary"><el-icon><search></search></el-icon>搜索</el-button> -->
      </div>
      <div v-show="checkInterface" class="login-check">
        <div class="check-hint">验证界面</div>
        <div class="examination-number1">
          <el-tag class="input-sign">考号：</el-tag>
          <el-input :v-model="candidateNumber" placeholder="请输入考号"></el-input>
        </div>
        <div class="operator-help">
          <p>1、请输入你的考号并单击验证按钮</p>
          <p>2、如信息无误，单机登录按钮开始</p>
          <p>3、如信息有误，请重新输入考号</p>
        </div>
        <button @click="checkInterface = false" class="check-btn">验证</button>
      </div>
      <div class="login-in">
        <div class="login-hint">登录界面</div>
        <div class="examination-number2">
          <el-tag class="input-sign">考号：</el-tag>
          <el-input :v-model="candidateNumber" placeholder="请输入考号"></el-input>
        </div>
        <div class="student-name">
          <el-tag class="input-sign">姓名：</el-tag>
          <el-input :v-model="studentName" placeholder="请输入姓名"></el-input>
        </div>
        <!-- <div class="btn">
          <button class="login-btn">登录</button>
          <button class="exit-btn">退出</button>
        </div> -->
        <el-row class="btn">
          <el-button class="login-btn" type="primary" ref="login_btn">登录</el-button>
          <!-- <el-button @click="changeText">登录1</el-button> -->
          <el-button class="exit-btn" type="success">退出</el-button>
        </el-row>
        <el-button @click="checkInterface = true" type="primary" plain>显示验证界面</el-button>
      </div>

      <div v-on:click="" v-for="i in array">
        <div>{{ i.title }}</div>
      </div>

      <div class="score-judge">
        计算机评分有自身的特点，
        <font color="orange">吐词清晰，断句清楚，语速适中，</font>
        才能更便于系统自动化判分，获取更高的分数。
      </div>
      <div class="company">技术支持：南京听说科技有限公司</div>
    </div>
  </div>

</template>


<script lang="ts">
import { defineComponent, ref, reactive, effectScope, Ref, computed } from "vue";
import { defineCustomElement } from "vue";
import { onClickOutside, useEventListener, useMouse } from '@vueuse/core'
// import {writefile} from '../../typescript/writefile'

import { useFetch } from '../../typescript/fetch'
import MyHeader from "../../components/MyHeader/MyHeader.vue";
import { ElRow, ElButton, buttonTypes } from "element-plus";
// import message from "element-plus/es/components/message";

// import {remote} from 'electron'
// import { $dataMetaSchema } from "ajv";

export default defineComponent({
  name: "Login",
  components: {
    MyHeader,
  },
  props: {
    msg: String,
  },
  directives: {
    //在模板中启用v-focus
    focus: (el) => { mouted: el.focus },
    demo: (el, binding) => {
      console.log(binding.value.color) // => "white"
      console.log(binding.value.text) // => "hello!"
    }

  },
  inject: ['i18n'],
  created() {
    // console.log(this.i18n.greetings.hello)
  },


  setup() {
    let checkInterface = ref(true);//验证界面是否显示
    let candidateNumber=''
    const { x, y } = useMouse()
    console.log(x.value)
    const mouse1 = useMouse()
    console.log(mouse1.x.value)
    const mouse2 = reactive(useMouse())
    console.log(mouse2.y)
    let message = ref('abc')
    const { data, error } = useFetch('http://api.uixsj.cn/hitokoto/get?type=social')
    //类型检查
    const year: Ref<string | number> = ref('2020')
    interface Book {
      title: string
      year?: number
    }
    const book: Book = reactive({ title: 'Vue3指引' })
    const count1 = ref(0)
    const double1 = computed(() => count1.value * 2)
    // => TS Error: Property 'split' does not exist on type 'number'
    // const result=double1.value.split('')
    // const double2 = computed<number>(() => {
    //   // 若返回值不是 number 类型则会报错
    //   return count1
    // })
    function handleChange(event: Event) {
      console.log((event.target as HTMLInputElement).value)
    }
    const isContentShown = ref(false)
    const open = () => (isContentShown.value = true)
    document.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();

      for (const f of e.dataTransfer.files) {
        console.log('File(s) you dragged here: ', f.path)
      }
    });
    document.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    //ref属性名称不能使用-等，可以使用下划线
    // function changeText(){
    //   this.$refs.login_btn
    // }
    function openfile() {
      // const dialog=remote.dialog
      // new BrowserWindow({
      //   width: 200,
      //   height: 200,
      //   titleBarStyle: 'hidden',
      //   frame: false
      // });
      dialog.showErrorBox('错误', '这是一个错误弹框！')
      // let options = {
      //   title: '信息框标题',
      //   body: '我是一条信息～～～',
      // }
      // let myNotification = new window.Notification(options.title, options)
      // //html5通知框
      // myNotification.onclick = () => {
      //   this.setState({ message: '【你点击了信息框！！】' })
      // }
      //   dialog.showOpenDialog({
      //     title: "请选择您喜欢的文件",
      //     buttonLabel: "走你",
      //     filters: [
      //         { name: 'Custom File Type', extensions: ['js', 'html', 'json'] },
      //       ]
      // }).then(result => {
      //     console.log(result.canceled)
      //     console.log(result.filePaths)
      //   }).catch(err => {
      //     console.log(err)
      //   })

    }


    // this.$(function(){
    //   this.$("#test1").after("<button id='atguigu'>[尚硅谷]</button>");
    // })
    // function addbutton() {
    //   this.$.function(){
    //     this.$("#test1").after("<button id='atguigu'>[尚硅谷]</button>");
    //   }
    // }
    // addbutton()
    // }
    // defineExpose({
    //   open
    // })
    //暂时不可用
    //自动卸载
    // const scope = effectScope()
    // scope.run(() => {
    //   useEventListener('mousemove', () => { })
    //   onClickOutside(el, () => { })
    //   watch(source, () => { })
    // })
    // all composables called inside `scope.run` will be disposed
    // scope.stop()

    // const isDark = useDark()
    // const title = useTitle('Set title')

    // watch(isDark, () => {
    //   title.value = isDark.value ? '🌙 Good evening!' : '☀️ Good morning!'
    // })
    let studentName=ref('')
    let input=ref('')
    let value=ref(null)
    let iconClasses=ref(['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']) // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
    return {
      checkInterface,
      message,
      handleChange,
      // writefile,
      openfile,
      value,
      iconClasses,
      candidateNumber,
      studentName,
      input,
      }
  },


  //activated与deactivated
  activated() {
    console.log('Login组件被激活了')
  },
  deactivated() {
    console.log('Login组件失活了')
  },
});
</script>


<style lang="less" scoped>
.login-container {
  width: 970px;
  height: 700px;
  /* background-color: aquamarine; */
  position: relative;
  margin: 0 auto;
  border: 15px rgb(0, 102, 238) solid;
  overflow: hidden;

  /* flex布局，左右居中 */
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // 两者共有之样式
  .check-hint,
  .login-hint {
    width: 100%;
    line-height: 30px;
    text-align: center;
    color: rgb(23, 131, 238);
    background-color: rgb(247, 247, 247);
    font: bold 40px 黑体;
    margin-bottom: 45px;
  }

  .examination-number1,
  .examination-number2,
  .student-name {
    font-size: 18px 微软雅黑;
    line-height: 30px;
    margin: 40px 125px;
  }

  /* 验证界面 */
  .login-check {
    width: 560px;
    height: 445px;
    background-color: white;
    position: relative;
    /* flex布局，左右居中 */
    /* display: flex;
    flex-direction: column;
    align-items: center; */

    margin: 135px auto;

    .operator-help {
      margin-left: 140px;
      color: rgb(149, 149, 149);

      p {
        line-height: 35px;
      }
    }

    .check-btn {
      width: 300px;
      height: 50px;
      background-color: #bfa;

      margin: 25px 120px;
      /* 四角圆角，去除边框 */
      border-radius: 5px;
      border: transparent;
    }
  }

  /* 登陆界面 */
  .login-in {
    /* 验证页面和登录页面重合 */
    width: 560px;
    height: 445px;
    background-color: white;
    /* flex布局，左右居中 */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 135px auto;

    .btn button,
    el-button {
      margin: 0 30px;
    }
  }

  // 底部
  .score-judge {
    color: white;
    background-color: rgb(3, 76, 189);
    font: 16px 微软雅黑;
    line-height: 30px;
    padding: 0 20px;
    margin-bottom: 20px;
  }

  .company {
    width: 100%;
    color: white;
    background-color: tomato;
    /* font格式：weight(bold)/style(Italic) size family */
    font: bold 12px 微软雅黑;
    text-align: center;
    line-height: 30px;
  }
}
  :deep(.el-tag){
    height:35px;
    margin-right: 10px;
  }
  :deep(.el-input){
    width:200px;
    height: 35px;
  }
  :depp(.el-button){
    width:80px;
    color:#bfa;
  }
</style>