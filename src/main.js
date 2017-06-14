// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/a'
import Banana from './components/b'
Vue.use(VRouter);
let router = new VRouter({
    routes: [{ path: '/apple', component: Apple },
        { path: '/banana', component: Banana }
    ]

})

new Vue({
    el: "#app",
    router,
    render: function(h) {
        return h(App)
    }
})