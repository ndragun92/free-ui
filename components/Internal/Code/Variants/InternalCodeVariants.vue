<template>
  <div
    style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px"
  >
    <div v-for="(variant, variantIndex) in variantsData" :key="variant">
      <div class="freeuiI__codeBlock-prism-actions" style="margin-bottom: 5px">
        <div
          class="freeuiI__codeBlock-prism-label"
          v-text="`#${variantIndex + 1} variant`"
        />
        <div>
          <div
            class="freeuiI__codeBlock-prism-copy"
            @click="onDelete(variantIndex)"
          >
            Delete
          </div>
          <div v-clipboard:copy="variant" class="freeuiI__codeBlock-prism-copy">
            Copy
          </div>
        </div>
      </div>
      <div v-html="variant" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class InternalCodeVariants extends Vue {
  @Prop({ required: true, default: () => [] })
  variants!: string[]

  // Data
  variantsData: string[] = this.variants

  // Methods
  onDelete(index: number) {
    this.variantsData.splice(index, 1)
  }
}
</script>
