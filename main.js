import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';
// Vue.prototype.$serverUrl = 'http://10.0.6.168:8081';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()