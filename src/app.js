import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'


Vue.component('b-button', Button)
Vue.component('b-button-group', ButtonGroup)
Vue.component('b-icon', Icon)
Vue.component('b-input', Input)
Vue.component('b-row', Row)
Vue.component('b-col', Col)



new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: 'hi'
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value);

    }
  }
})