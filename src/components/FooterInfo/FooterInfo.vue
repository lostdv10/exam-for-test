<template>
  <!-- 录音和考试界面的底下录音条，音量信息等 -->
  <div class="footer-info">
    <label class="volume-lb">音量:{{ volume }}</label>
    <!-- 进度条 -->
    <div class="volume-bar"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "FooterInfo",
  setup() {
    let volume = ref(80); //音量
    return {
      volume,
    };
  },
});
</script>

<style lang="less" scoped>
/* 底部信息 */
.footer-info {
  /* 若是被内容自动撑开，可以认为其width=auto,这时则不能通过设置margin=xx auto;使其左右居中 */
  width: 970px;
  height: 80px;
  background-color: orange;
  .volume-lb {
  width: 400px;
  height: 40px;
  margin-left: 30px;
  background-color: bisque;

}
} 

</style>
