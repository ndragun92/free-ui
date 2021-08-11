export interface AsideNavigationItemInterface {
  name: string
  slug: string
  searchIndex: string
}

export interface AsideNavigationInterface {
  id: string
  name: string
  items: AsideNavigationItemInterface[]
}
