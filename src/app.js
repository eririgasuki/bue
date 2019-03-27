import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'

Vue.component('b-button',Button)
Vue.component('b-button-group',ButtonGroup)
Vue.component('b-icon',Icon)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    }
})