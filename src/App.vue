<template>
  <div id="app" :title="hello">

    <button @click="haha">点击显示</button>

    <transition  enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
      <p v-show="condition">显示</p>
    </transition>

    <router-view></router-view>
    <router-link to="/apple">Go to Foo</router-link>
    <router-link to="/banana">Go to Bar</router-link>
  
  
  
  
  
  
  
  
  
  
  </div>
</template>

<script>
  
  import componentA from './components/a.vue'
  import '../node_modules/_animate.css@3.5.2@animate.css/animate.css'
  export default {
    components: {
      componentA
    },
    data() {
      return {
        hello: "world",
        myValue: '',
        condition: "1",
  
  
  
      }
    },
    methods: {
      myEvent: function(hello) {
        console.log(hello)
  
      },
      haha: function() {
        this.condition = !this.condition
  
      },
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
      getmyValueWithNum() {
        return this.myValue.replace(/\d/g, '')
      }
    },
    computed: {
      myValue1WithNum() {
        return this.myValue
      },
      myValueWithNum: function() {
        return this.myValue.replace(/\d/g, '')
      }
  
    },
    watch: {
      myValue: function(val, oldVal) {
        console.log("新:" + val);
        console.log("旧:" + oldVal);
  
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
  
  p {
    font-size: 60px
  }
</style>
