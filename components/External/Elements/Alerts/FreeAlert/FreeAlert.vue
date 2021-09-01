<template>
  <div>
    <div class="freeuiI__codeBlock">
      <div>
        <select v-model="type">
          <option value="primary">primary</option>
          <option value="secondary">secondary</option>
          <option value="success">success</option>
          <option value="info">info</option>
          <option value="warning">warning</option>
          <option value="error">error</option>
        </select>
        <button type="button" @click="bordered = !bordered">Bordered</button>
        <select v-model="radius">
          <option :value="null">None</option>
          <option value="xsm">xsm</option>
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
          <option value="xlg">xlg</option>
          <option value="full">full</option>
        </select>
        <button type="button" @click="saveVariant">Save variant</button>
      </div>
      <div
        class="freeui-alert"
        :class="returnClass"
        contenteditable="true"
        role="alert"
        spellcheck="false"
        @blur="onBlur"
        @keypress.enter.prevent
        v-text="content"
      />
      <internal-code-clipboard :code="returnHtmlExample" />
    </div>
    <internal-code-variants :variants="savedVariants" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import InternalCodeClipboard from '~/components/Internal/Code/Clipboard/InternalCodeClipboard.vue'
import InternalCodeVariants from '~/components/Internal/Code/Variants/InternalCodeVariants.vue'
@Component({
  components: { InternalCodeVariants, InternalCodeClipboard },
})
export default class FreeAlert extends Vue {
  // Data
  content: string = 'test'
  type:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark' = 'primary'

  radius = null

  bordered: boolean = false

  // Getters
  get returnClass() {
    let classNames = `freeui-alert--${this.type}`
    if (this.bordered) {
      classNames += ' freeui-alert--bordered'
    }
    if (this.radius) {
      classNames += ` freeui-alert__radius--${this.radius}`
    }
    return classNames
  }

  get returnHtmlExample() {
    return `<div class="freeui-alert ${this.returnClass}" role="alert">${this.content}</div>`
  }

  // Methods
  onBlur(e: IntersectionObserverEntry) {
    this.content = e.target.textContent?.trim() || ''
  }

  savedVariants: string[] = []
  saveVariant() {
    this.savedVariants.push(this.returnHtmlExample)
  }
}
</script>
