
import {ref} from 'vue'
import { defineStore ,mapStores,mapState,mapActions} from 'pinia'

const useCounterStore1 = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})

const useCounterStore2 = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})



export{
  useCounterStore1,
  useCounterStore2,


}


const useCounterStore3 = defineStore('counter', {
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

const useUserStore = defineStore('user', {
  // ...
})

export default {
  computed: {
    // 其他计算属性
    // ...
    // 允许访问 this.counterStore 和 this.userStore
    ...mapStores(useCounterStore3, useUserStore),
    // 允许读取 this.count 和 this.double
    ...mapState(useCounterStore3, ['count', 'double2']),
  },
  methods: {
    // 允许读取 this.increment()
    ...mapActions(useCounterStore3, ['increment']),
  },
}