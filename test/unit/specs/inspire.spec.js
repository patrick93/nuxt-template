import Vue from 'vue'
import Inspire from '@/components/inspire'

describe('inspire.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Inspire)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Teste')
  })
})
