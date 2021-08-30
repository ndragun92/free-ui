<template>
  <div class="freeuiI__codeBlock-pre">
    <client-only>
      <div class="freeuiI__codeBlock-prism">
        <div class="freeuiI__codeBlock-prism-actions">
          <div class="freeuiI__codeBlock-prism-label">Code example</div>
          <div v-clipboard:copy="code" class="freeuiI__codeBlock-prism-copy">
            Copy
          </div>
        </div>
        <vue-prism language="html" :code="code" />
      </div>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class InternalCodeClipboard extends Vue {
  @Prop({ required: true, default: '', type: String })
  code!: string
}
</script>
