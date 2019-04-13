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


new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: 'hi'
  },
  created() {},
  methods: {
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast('汉字', {
        enableHtml: false,
        position,
        autoClose: 3,
        closeButton: {
          text: 'close toast',
          callback() {
            console.log('toast closed');
          }
        }
      })
    }
  }
})