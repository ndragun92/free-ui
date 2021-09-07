import { shallowMount } from '@vue/test-utils'
import FreeUiAlert from '@/components/External/Elements/Alerts/FreeUiAlert/FreeUiAlert.vue'

describe('FreeUiAlert', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(FreeUiAlert)
    expect(wrapper.vm).toBeTruthy()
  })
})
