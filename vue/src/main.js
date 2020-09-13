import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Input, Form, FormItem, Button, Message } from 'element-ui';
import axios from 'axios'

Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
Vue.use(ElementUI);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.prototype.$message = Message;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
