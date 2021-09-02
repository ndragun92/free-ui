import { Component, Vue } from 'nuxt-property-decorator'
import { OptionsBaseInterface } from '~/components/External/Elements/_Logic/Interfaces/ElementsInterface'

@Component
export default class ElementsMixin extends Vue {
  options: OptionsBaseInterface[] = []
  content: string = ''
  savedVariants: string[] = []

  // Getters
  get returnClass() {
    let classNames = ''
    this.options.forEach((obj) => {
      // @ts-ignore
      const key = this[obj.key]
      if (key) {
        classNames += ` ${obj.classPrefix}${key}`
      }
    })
    return classNames.trim()
  }

  get returnHtmlExample() {
    return `<div class="freeui-alert ${this.returnClass}" role="alert">${this.content}</div>`
  }

  // Methods
  onBlurUpdateContent(e: IntersectionObserverEntry) {
    this.content = e.target.textContent?.trim() || ''
  }

  onSaveVariant() {
    if (this.savedVariants.includes(this.returnHtmlExample)) {
      alert('This variant is already saved.')
    } else {
      this.savedVariants.push(this.returnHtmlExample)
    }
  }

  onGetValue(key: string) {
    // @ts-ignore
    return this[key]
  }

  onSetValue(key: string, value: string) {
    // @ts-ignore
    this[key] = value
  }
}
