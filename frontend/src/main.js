import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false

var url = "http://localhost:3000" //express服务器的地址
axios.get(url + '/product') //放数据的接口
    .then(function(response) { //收到的数据
        console.log(response);
        console.log(response.data); //展示数据（看看是否拿到，和数据长啥样） 
        var nodeData = response.data;
    })
    .catch(function(error) {
        console.log(error);
    });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')