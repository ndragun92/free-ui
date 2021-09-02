<template>
  <div>
    <div class="freeuiI__codeBlock">
      <!--      <div class="freeuiI__codeBlock-options">-->
      <!--        <div></div>-->
      <!--        <div>-->
      <!--          <label>Type</label>-->
      <!--          <select v-model="type" size="2">-->
      <!--            <option value="primary">primary</option>-->
      <!--            <option value="secondary">secondary</option>-->
      <!--            <option value="success">success</option>-->
      <!--            <option value="info">info</option>-->
      <!--            <option value="warning">warning</option>-->
      <!--            <option value="error">error</option>-->
      <!--          </select>-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <label>Border</label>-->
      <!--          <select v-model="border" size="2">-->
      <!--            <option :value="null">None</option>-->
      <!--            <option value="xsm">xsm</option>-->
      <!--            <option value="sm">sm</option>-->
      <!--            <option value="md">md</option>-->
      <!--            <option value="lg">lg</option>-->
      <!--            <option value="xlg">xlg</option>-->
      <!--          </select>-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <label>Border radius</label>-->
      <!--          <select v-model="radius" size="2">-->
      <!--            <option :value="null">None</option>-->
      <!--            <option value="xsm">xsm</option>-->
      <!--            <option value="sm">sm</option>-->
      <!--            <option value="md">md</option>-->
      <!--            <option value="lg">lg</option>-->
      <!--            <option value="xlg">xlg</option>-->
      <!--            <option value="full">full</option>-->
      <!--          </select>-->
      <!--        </div>-->
      <!--      </div>-->
      <div
        v-for="(option, optionIndex) in options"
        :key="`${option.key}--${optionIndex}`"
        class="freeuiI__codeBlock-options"
      >
        <label v-text="option.displayName" />
        <div>
          <div
            v-for="item in option.data"
            :key="item.value"
            :class="{ selected: item.value === onGetValue(option.key) }"
            @click="onSetValue(option.key, item.value)"
            v-text="item.name"
          />
        </div>
      </div>
      <div
        class="freeui-alert"
        :class="returnClass"
        contenteditable="true"
        role="alert"
        spellcheck="false"
        @blur="onBlurUpdateContent"
        @keypress.enter.prevent
        v-text="content"
      />
      <internal-code-clipboard
        :code="returnHtmlExample"
        @save-variant="onSaveVariant"
      />
    </div>
    <internal-code-variants :variants="savedVariants" />
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import InternalCodeClipboard from '~/components/Internal/Code/Clipboard/InternalCodeClipboard.vue'
import InternalCodeVariants from '~/components/Internal/Code/Variants/InternalCodeVariants.vue'
import {
  OptionsBaseInterface,
  SizesBaseType,
  VariantsBaseType,
} from '~/components/External/Elements/_Logic/Interfaces/ElementsInterface'
import ElementsMixin from '~/components/External/Elements/_Logic/Mixins/ElementsMixin'

interface TypeInterface {
  name: string
  value: VariantsBaseType
}

interface BorderInterface {
  name: string
  value: SizesBaseType
}

interface RadiusInterface {
  name: string
  value: SizesBaseType | 'full'
}

interface OptionsInterface extends OptionsBaseInterface {
  data: TypeInterface[] | BorderInterface[] | RadiusInterface[]
}

@Component({
  components: { InternalCodeVariants, InternalCodeClipboard },
})
export default class FreeAlert extends mixins(ElementsMixin) {
  // Data
  options: OptionsInterface[] = [
    {
      key: 'type',
      displayName: 'Type',
      classPrefix: 'freeui-alert--',
      data: [
        {
          name: 'Primary',
          value: 'primary',
        },
        {
          name: 'Secondary',
          value: 'secondary',
        },
        {
          name: 'Success',
          value: 'success',
        },
        {
          name: 'Info',
          value: 'info',
        },
        {
          name: 'Warning',
          value: 'warning',
        },
        {
          name: 'Error',
          value: 'error',
        },
        {
          name: 'Light',
          value: 'light',
        },
        {
          name: 'Dark',
          value: 'dark',
        },
      ] as TypeInterface[],
    },
    {
      key: 'border',
      displayName: 'Border',
      classPrefix: 'freeui-alert__border--',
      data: [
        {
          name: 'None',
          value: null,
        },
        {
          name: 'xsm',
          value: 'xsm',
        },
        {
          name: 'sm',
          value: 'sm',
        },
        {
          name: 'md',
          value: 'md',
        },
        {
          name: 'lg',
          value: 'lg',
        },
        {
          name: 'xlg',
          value: 'xlg',
        },
      ] as BorderInterface[],
    },
    {
      key: 'radius',
      displayName: 'Border radius',
      classPrefix: 'freeui-alert__radius--',
      data: [
        {
          name: 'None',
          value: null,
        },
        {
          name: 'xsm',
          value: 'xsm',
        },
        {
          name: 'sm',
          value: 'sm',
        },
        {
          name: 'md',
          value: 'md',
        },
        {
          name: 'lg',
          value: 'lg',
        },
        {
          name: 'xlg',
          value: 'xlg',
        },
        {
          name: 'full',
          value: 'full',
        },
      ] as RadiusInterface[],
    },
  ]

  content: string = 'test'
  type: VariantsBaseType = 'primary'

  border = null
  radius = null
}
</script>
