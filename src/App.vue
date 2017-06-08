<template>
  <div id="app" :title="hello">
    <h2 v-for="(item ,index) in list">
      {{index}} {{item.name}}
    </h2>
    <button v-on:click="additem">添加</button>
    <a v-bind:href="link" v-bind:classname="classname">to 百度</a> {{myValue}}
    <componentA @my-event="onComA"></componentA>
  
    <input type="checkbox" v-model="myBox" value="apple">
  
    <input type="checkbox" v-model="myBox" value="男">
  
    <input type="checkbox" v-model="myBox" value="女">
  
    <input type="checkbox" v-model="myBox" value="玻璃"> {{myBox}}
    <div>
      <select name="" id="" v-model="selection">
        
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">是</option>
        <!--根据value的值参与选中-->
        <option value="4">4</option>
        <option value="5">5</option>
      
      </select>
    </div>
  <input type="text" v-model.number="input">
  
  
  
  
  
  
  
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
        link: "http://www.baidu.com",
        classname: {
          "red_font": false,
          "blue-font": true
        },
        myValue: "skoshd",
        myBox: [],
        selection: "3",
        input:''
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
      },
      onComA: function(parmfromA) {
        console.log('onComA' + parmfromA)
  
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
  
  .red_font {
    color: red
  }
  
  .blue-font {
    color: blue
  }
</style>
