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


    2.使用组件
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


3.列表数据更新=跟设置

 <button v-on:click="additem">添加</button>
methods:{
      additem:function(){
        this.list.push({
          name:"sdsdsd"
        })
      }
    }
设置数组的长度 不会更新
数组元素的赋值也不更新 
Vue.set(this.list, 1, {
name: "pkpj",
price: "222"
})
可以使用Vue的全局方法实现值得变化并且更新数据表


4.vue标签属性和条件的渲染
v-bind:属性的参数   例子
 <a v-bind:href="link">to 百度</a>
 也可以使用：属性名

 data数据里面的数据改变相应的属性就会跟着改变
classname:{
  "red_font":false,
  "blue-font":true
}
也可以数组 对象混用

v-if元素是否存在
v-show:只是显示隐藏


5.事件绑定，表单的绑定
v-on:click =>@click
@keydown.enter=""
v-on:keydown.13="onKeydown"
onKeydown =>自定义事件
键盘输入enter的时候
修改器
.stop阻止冒泡

<template>
    <div>
    
        {{hello}}
    
        <button @click="emitMyEvent">点一下</button>
    
    </div>
</template>

<script>
    export default {
    
        data() {
    
            return {
    
                hello: " i am A"
    
            }
    
        },
    
        methods: {
    
            emitMyEvent() {
                this.$emit("my-event", this.hello)

                <!--这里子组件传递事件名称和数据-->
    
            }
    
        }
    
    }
</script>


父组件<componentA @my-event="onComA"></componentA>

methods:{

onComA:function(parmfromA){
    console.log('onComA'+parmfromA)
}

input组件的绑定
<!--parmfromA这里是传递过来的参数-->
   {{myValue}}
<input type="text" v-model="myValue">
v-model.number="myValue" 输出的位数字
      .trim 去除空格

    <!--<input type="checkbox" v-model="myBox" value="apple">

    <input type="checkbox" v-model="myBox" value="男">

    <input type="checkbox" v-model="myBox" value="女">

    <input type="checkbox" v-model="myBox" value="玻璃"> -->

  <input type="radio" v-model="myBox" value="玻璃">



    <!---->
    {{myBox}}
会把选中的value复制到数组中
 
    data{
        myBox: []
    }
 <select name="" id="" v-model="selection">
    
    <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">是</option>
     
    <!--根据value的值参与选中-->
       <option value="4">4</option>
        <option value="5">5</option>
  
  </select>




6.计算属性的应用

 computed:{
      myValue1WithNum(){
        return  this.myValue  
      },
      myValueWithNum:function(){
         return  this.myValue.replace(/\d/g,'')过滤数字
      }

    }
  也可以通过方法来实现
  只有在调用的时候就会
   <h2>{{getmyValueWithNum()}}</h2>


  属性监听
    <input type="text" v-model="myValue">
  watch:{
      myValue:function(val,oldVal){
        console.log("新:"+val)
        console.log("旧:"+oldVal)

      }
    } 


    7父子组件传值
    父组件 =>子 Pass Props
 父组件： <componentA number="00"></componentA>
          number大小写不明显number-to-do
 子组件：
         {{number}}
                 {{numberToDo}}number-to-do
 
    export default {
        props:['number'],//在这里接收父组件的传递的数据 并且该组件已经在data里
                          声明了
                        接收数组
                        或者对象
     例子
     prps:{
       'number-to-do':[Number,String，Object]可以设置接收的数值
     }


        data() {
            return {
                hello: " i am A"
            }
        },
        methods: {
            emitMyEvent() {
                this.$emit("my-event", this.hello)子组件的方法=>父组件this.hello是传递的参数

                                                   <componentA @my-event="myEvent"></componentA>
                                                   父组件监听这个事件，并且顶一个本组件的事件

            }
        }
    }






插槽功能

<template>
    <div>
    
        {{hello}}
        {{myValue}}
    
        <button @click="emitMyEvent">点一下</button>
        <slot></slot>等同于占位符
        <slot name="header"></slot>
        <slot name="footer"></slot>
    
    </div>
</template>


<componentA @my-event="myEvent">
      <p>9-0-09-0</p>

      <p slot="header"></p>   就会 相应的插到子组件中去

 </componentA>
  


9.动态组件

就是通过is改变不同的模板
<keep-alive>
<p :is="currentView"></p>
</keep-alive>
data{
  currentView:"com-a"
}
切换的话

currentView:"com-b"

keep-alive  模板切换保存A保证响应的速度

总结
使用组件树设置项目
配置文件链接各种组件--命名的转换，动态组件
父组件向内传递属性-动态属性
子组件通过事件向外发布事件 传递参数

slot插槽传递末班-具名  <slot name>