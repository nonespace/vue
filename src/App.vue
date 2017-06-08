<template>
  <div id="app" :title="hello">

      <componentA></componentA>
      <input type="text" v-model="myValue">
   <h2>{{getmyValueWithNum()}}</h2>

  
  
  
  
  
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
        myValue:''
       
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
  
      },
      getmyValueWithNum(){
        return  this.myValue.replace(/\d/g,'')
      }
    },
    computed:{
      myValue1WithNum(){
        return  this.myValue  
      },
      myValueWithNum:function(){
         return  this.myValue.replace(/\d/g,'')
      }

    },
    watch:{
      myValue:function(val,oldVal){
        console.log("新:"+val)
        console.log("旧:"+oldVal)

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
