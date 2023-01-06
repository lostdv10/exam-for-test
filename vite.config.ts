// vite.config.ts
import { defineConfig } from 'vite'
// import checker from 'vite-plugin-checker'
import vue from '@vitejs/plugin-vue'
//import path from 'path' 										// 新增
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



export default defineConfig({
  // ...
  //base: path.resolve(__dirname, './dist/'),	// 新增
  server:{
    host:'0.0.0.0',//所有ip均可访问
    port:5174,
    
    hmr:{
    overlay:false,},},
  plugins: [
    // ...
    vue({
      // template: {
      //   compilerOptions: {
      //     // 将所有带短横线的标签名都视为自定义元素
      //     isCustomElement: (tag) => tag.includes('-')
      //   }
      // }
    }),
    // checker(typescript:true),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

})