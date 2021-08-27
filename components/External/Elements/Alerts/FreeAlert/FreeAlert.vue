<template>
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
    <client-only>
      <vue-prism language="html" :code="returnHtmlExample" />
    </client-only>
    <div
      class="freeui-alert"
      :class="returnClass"
      contenteditable="true"
      @blur="onBlur"
      v-text="content"
      @keypress.enter.prevent
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class FreeAlert extends Vue {
  // Data
  content: string = 'test'
  type: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' =
    'primary'

  bordered: boolean = false

  // Getters
  get returnClass() {
    let classNames = `freeui-alert--${this.type}`
    if (this.bordered) {
      classNames += ' freeui-alert--bordered'
    }
    return classNames
  }

  get returnHtmlExample() {
    return `<div class="freeui-alert ${this.returnClass}">${this.content}</div>`
  }

  // Methods
  onBlur(e: IntersectionObserverEntry) {
    this.content = e.target.textContent?.trim() || ''
  }
}
</script>
