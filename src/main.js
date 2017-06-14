// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/a.vue'
import Banana from './components/b.vue'
Vue.use(VRouter);
var routers = [
    { path: '/apple', component: Apple },
    { path: '/banana', component: Banana }
]
let router = new VRouter({

    routers

})

new Vue({
    el: "#app",
    router,
    render: function(h) {
        return h(App)
    }
})