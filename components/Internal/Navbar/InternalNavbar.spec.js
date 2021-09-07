import { shallowMount } from '@vue/test-utils'
import InternalNavbar from '@/components/Internal/Navbar/InternalNavbar.vue'

describe('InternalNavbar', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(InternalNavbar)
    expect(wrapper.vm).toBeTruthy()
  })
})
