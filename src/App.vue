<template>
  <div id="app" :title="hello">
  
  
    <h2 v-for="(item ,index) in list">
      {{index}} {{item.name}}
    </h2>
    <componentA></componentA>
    <button v-on:click="additem">添加</button>

    <a v-bind:href="link" v-bind:classname="classname">to 百度</a>
  </div>
</template>

<script>
  import Vue from "vue"
  import componentA from './components/a.vue'
  export default {
    components: {
      componentA
    },
    data() {
      return {
        hello: "world",
        list: [{
          name: 1
        }],
        link:"http://www.baidu.com",
        classname:{
          "red_font":false,
          "blue-font":true
        }
      }
    },
    methods: {
      additem: function() {
        // this.list.push({
        //   name:"sdsdsd"
        // })
  
        Vue.set(this.list, 1, {
          name: "pkpj",
          price: "222"
  
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .red_font{
    color:red
  }
  .blue-font{
    color:blue
  }
</style>
