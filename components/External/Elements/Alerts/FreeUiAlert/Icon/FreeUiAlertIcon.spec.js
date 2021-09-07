import { shallowMount } from '@vue/test-utils'
import FreeUiAlertIcon from '@/components/External/Elements/Alerts/FreeUiAlert/Icon/FreeUiAlertIcon.vue'

describe('FreeUiAlertIcon', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(FreeUiAlertIcon)
    expect(wrapper.vm).toBeTruthy()
  })
})
