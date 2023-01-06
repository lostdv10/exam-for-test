import { defineStore } from "pinia"
//可能用到的数据（集合）
/*
学生信息
监考机的命令解析（Api）
考试的各种状态
试卷
分数
资源文件
数据库字段（Api）
*/
const studentInfo = defineStore('studentInfo', {
  state: () => ({ count: 0 }),
  getters: {
    double2: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

const paperInfo = defineStore('paperInfo',{
  state: () =>{
    return{

    }
  }
})
export{
  studentInfo,
}