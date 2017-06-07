<template>
  <div id="app" :title="hello">
   
  
     <h2 v-for="(item ,index) in list">
      {{index}} {{item.name}}
     </h2>
    <componentA></componentA>
  </div>
</template>

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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
