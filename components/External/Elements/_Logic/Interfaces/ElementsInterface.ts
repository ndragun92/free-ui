export interface OptionsBaseInterface {
  key: string
  displayName: string
  classPrefix: string
  data: any[]
}

export type VariantsBaseType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'light'
  | 'dark'

export type SizesBaseType = 'xsm' | 'sm' | 'md' | 'lg' | 'xlg'
