<template>
  <div id="main-container">
    <label>message</label>
    <button @click="msgOk" class="ok">确定</button>
    <button @click="msgCancel" class="cancel">取消</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MessageBox',
  props: {
    msg: String
  },
  setup(props){
    const message:string=""
    function msgOk(){
      console.log("我确定")
    }
    function msgCancel(){
      console.log("我取消")
    }

    return{
      message,
      msgOk,
      msgCancel,

    }

  }
}
</script>

<style lang="less" scoped>
#main-container{
  width: 400px;
  height: 200px;
  border:2px rgb(100, 160, 248);
  //flex相关
  position: flex;
  button{
    flex:auto;
  }
  button.ok{
    background-color:orange;
  }
  button.cancel{
    background-color:skyblue;
  }
}
</style>
