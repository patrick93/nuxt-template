import Vue from 'vue'
import Welcome from '@/components/welcome'

describe('welcome.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Welcome)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.headline').textContent)
      .toEqual('Welcome to the Vuetify + Nuxt.js template')
  })
})
