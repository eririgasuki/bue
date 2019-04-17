import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Aside from './aside'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('b-button', Button)
Vue.component('b-button-group', ButtonGroup)
Vue.component('b-icon', Icon)
Vue.component('b-input', Input)
Vue.component('b-row', Row)
Vue.component('b-col', Col)
Vue.component('b-layout', Layout)
Vue.component('b-header', Header)
Vue.component('b-aside', Aside)
Vue.component('b-content', Content)
Vue.component('b-footer', Footer)
Vue.component('b-toast', Toast)
Vue.use(Plugin)
Vue.component('b-tabs', Tabs)
Vue.component('b-tabs-head', TabsHead)
Vue.component('b-tabs-body', TabsBody)
Vue.component('b-tabs-item', TabsItem)
Vue.component('b-tabs-pane', TabsPane)
Vue.component('b-popover', Popover)
Vue.component('b-collapse', Collapse)
Vue.component('b-collapse-item', CollapseItem)


new Vue({
  el: '#app',
  data: {
    selectedTab: 'economy'
  },
  created() {},
  methods: {

  }

})