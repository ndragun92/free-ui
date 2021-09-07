import { shallowMount } from '@vue/test-utils'
import FreeUiAlertBasic from '@/components/External/Elements/Alerts/FreeUiAlert/Basic/FreeUiAlertBasic.vue'

describe('FreeUiAlertBasic', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(FreeUiAlertBasic)
    expect(wrapper.vm).toBeTruthy()
  })
})
