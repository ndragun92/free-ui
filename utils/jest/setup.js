import { config } from '@vue/test-utils'
import ClientOnlyStub from './ClientOnlyStub'

// Mock Nuxt client-side component
config.stubs['client-only'] = ClientOnlyStub
config.stubs['vue-prism'] = ClientOnlyStub
