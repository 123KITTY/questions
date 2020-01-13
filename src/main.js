// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import '../src/moke/index'
import {
  Button,
  Breadcrumb,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker,
  Badge,
  Tabs,
  Spin,
  List,
  Avatar,
  Tooltip,
  Tag,
  Checkbox,
  Col,
  Row,
  Popover,
  Progress,
  Alert,
  BackTop,
  Skeleton,
  Steps,
  Message,
  Cascader,
  InputNumber,
  Card,
  Switch,
  Rate
} from 'ant-design-vue'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(Radio)
Vue.use(Menu)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)
Vue.use(LocaleProvider)
Vue.use(Dropdown)
Vue.use(DatePicker)
Vue.use(Avatar)
Vue.use(Tooltip)
Vue.use(Badge)
Vue.use(Tabs)
Vue.use(Spin)
Vue.use(List)
Vue.use(Tag)
Vue.use(Checkbox)
Vue.use(Col)
Vue.use(Row)
Vue.use(Popover)
Vue.use(Progress)
Vue.use(Alert)
Vue.use(BackTop)
Vue.use(Skeleton)
Vue.use(Steps)
Vue.use(Message)
Vue.use(Cascader)
Vue.use(InputNumber)
Vue.use(Card)
Vue.use(Switch)
Vue.use(Rate)
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
