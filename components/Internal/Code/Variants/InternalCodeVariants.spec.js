import { shallowMount } from '@vue/test-utils'
import InternalCodeVariants from '@/components/Internal/Code/Variants/InternalCodeVariants.vue'

describe('InternalNavbar', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(InternalCodeVariants, {
      props: {
        variants: ['<div>test</div>'],
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
