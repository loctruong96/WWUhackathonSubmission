import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import moment from 'moment'

window.axios = require('axios');

Vue.use(Vuetify);

Vue.prototype.moment = moment;
// Vue.prototype.$searchAPI = 'http://localhost:5000/search';
// Vue.prototype.$submitAPI = 'http://localhost:5000/submit';

Vue.prototype.$searchAPI = 'http://176.9.30.245:8080/search';
Vue.prototype.$submitAPI = 'http://176.9.30.245:8080/submit';

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
