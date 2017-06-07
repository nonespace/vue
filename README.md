# demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Vue.config.productionTip = false;

Vue.component("my-header",{
  template:"<h1>{{message}}</h1>",
  data:{
    message:"实验效果" 

  }
});
 避免引用赋值 可以使用data(){
     return {

     }
 }
避免重复数据混乱








var myHeaderChild={
  template:"<h2>我是一个小耗子</h2>"
}
var myHeader={
  template:"<h2>四大皆空倒计时的 <my-header-child></my-header-child></h2>",
  components:{
    "my-header-child":myHeaderChild
  }
}
//这个实在主文件里面注册vue组件

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  el: '#app',
  components:{
    "my-header":myHeader
  }
  // template:"<h2>环境设计</h2>"//在main里面挂载数据
 
})


1.实例选项
    可以使用 vm.$data得到数据
    $on("emit",function(){

    });


指令 写在末班里面
v-html
v-on:click="";
v-on:keydown.enter=""
v-modal
v-for

stop
previent

内置组件


  {{hello}}
    <h1 v-text="hello"></h1>
    <h2 v-html="hello"></h2>

    指令
    v-for
      <h2 v-for="item in list">
      {{item.name}}
    </h2>
    v-text="item.name + item.price"
     <h2 v-for="(item ,index) in list">
     {{index}} {{item.name}}
    </h2>


    使用组件
    <script>
 import componentA from './components/a.vue'
export default {
  components:{
    componentA
  },
  data(){
    return {
      hello:"world",
      list:[
        {name:1}
      ]
    }
  }
}
</script>
