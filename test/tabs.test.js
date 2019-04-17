const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
Vue.component('b-tabs', Tabs)
Vue.component('b-tabs-head', TabsHead)
Vue.component('b-tabs-body', TabsBody)
Vue.component('b-tabs-item', TabsItem)
Vue.component('b-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('Tabs 存在.', () => {
    expect(Tabs).to.exist
  })
  it('接受 selected prop', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <b-tabs selected ="economy">
      <b-tabs-head>
        <b-tabs-item name="society">society</b-tabs-item>
        <b-tabs-item name="psycho">psycho</b-tabs-item>
        <b-tabs-item name="economy">economy</b-tabs-item>
      </b-tabs-head>
      <b-tabs-body> 
        <b-tabs-pane name="society">society</b-tabs-pane>
        <b-tabs-pane name="psycho">psycho</b-tabs-pane>
        <b-tabs-pane name="economy">economy</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let active = vm.$el.querySelector(`.tabs-item[data-name="economy"]`)
      expect(active.classList.contains('active')).to.be.true
      done()
    })
  })
  it('接受 direction prop', () => {})
})