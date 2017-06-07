// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Vue.config.productionTip = false;

// Vue.component("my-header",{
//   template:"<h1>{{message}}</h1>",
//   data:{
//     message:"实验效果"
//   }
// });


// var myHeaderChild={
//   template:"<h2>我是一个小耗子</h2>"
// }
// var myHeader={
//   template:"<h2>四大皆空倒计时的 <my-header-child></my-header-child></h2>",
//   components:{
//     "my-header-child":myHeaderChild
//   }
// }
// //这个实在主文件里面注册vue组件

// /* eslint-disable no-new */
// // new Vue({
// //   el: '#app',
// //   router,
// //   template: '<App/>',
// //   components: { App }
// // })

// new Vue({
//   el: '#app',
//   components:{
//     "my-header":myHeader
//   }
//   // template:"<h2>环境设计</h2>"//在main里面挂载数据
 
// })
new Vue({
  el:"#app",
  render:function(h){
    return h(App)
  }
})