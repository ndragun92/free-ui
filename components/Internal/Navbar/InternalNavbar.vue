<template>
  <div ref="nav" class="nav">
    <nav class="nav__main">
      <div class="nav__main-container">
        <div class="nav__main-logo">FREE<span>UI</span></div>
        <div>
          <ul class="nav__main-links">
            <li>
              <a @click="onToggleBg">Home</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Examples</a>
            </li>
            <li>
              <a href="#">Releases</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="nav__sub"
      :class="{
        'nav__sub--fixed': offsetTop > navHeight,
      }"
    >
      <div class="nav__sub-container">
        <div class="nav__sub-search">
          <input
            v-model.trim="searchKeyword"
            type="search"
            placeholder="Search docs..."
            @focus="searchDropdownShow = true"
            @blur="onBlur"
          />
          <div
            v-if="searchDropdownShow && searchKeyword.length"
            class="nav__sub-search__dropdown"
          >
            <ul v-if="returnFilteredNavigation.length">
              <li
                v-for="(category, categoryIndex) in returnFilteredNavigation"
                :key="`${category.id}--${categoryIndex}`"
              >
                <span v-html="returnHighlightedName(category.name)" />
                <ul v-if="category.items.length">
                  <li
                    v-for="(item, itemIndex) in category.items"
                    :key="`${item.slug}--${itemIndex}-${categoryIndex}`"
                  >
                    <nuxt-link :to="item.slug">
                      <span v-html="returnHighlightedName(item.name)" />
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul v-else>
              <li>
                <span style="margin-bottom: 0">No results</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import cloneDeep from 'lodash/cloneDeep'
import escapeRegExp from 'lodash/escapeRegExp'
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import {
  AsideNavigationInterface,
  AsideNavigationItemInterface,
} from '~/interfaces/internal/InternalLayoutInterface'
@Component
export default class InternalNavbar extends Vue {
  // Data
  offsetTop: number = 0
  navHeight: number = 60
  // Hooks
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll)
      // this.navHeight = (this.$refs.nav as HTMLElement).offsetHeight
    })
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  }

  // Methods
  onScroll() {
    this.offsetTop = window.top.scrollY
  }

  // <editor-fold desc="Subnav Search">
  // Watch
  @Watch('$route.path')
  onWatchRoutePathChange(): void {
    this.searchDropdownShow = false
  }

  // Data
  searchKeyword: string = ''
  searchDropdownShow: boolean = false
  asideNavigation: AsideNavigationInterface[] = []
  // Hooks
  async fetch() {
    const data = await this.$content('aside/items').fetch()
    // @ts-ignore
    this.asideNavigation = data.navigation as AsideNavigationInterface[]
  }

  // Getters
  get returnFilteredNavigation(): AsideNavigationInterface[] {
    const asideNavigationData = cloneDeep(this.asideNavigation)
    return asideNavigationData.filter((category) => {
      const itemNames: AsideNavigationItemInterface[] = category.items.filter(
        (item: AsideNavigationItemInterface) =>
          this.searchKeyword
            .toLowerCase()
            .split(' ')
            .every((v) => item.searchIndex.toLowerCase().includes(v))
      )
      category.items = itemNames
      return !!itemNames.length
    })
  }

  // Methods
  returnHighlightedName(text: string): string {
    return text.replace(
      new RegExp(escapeRegExp(this.searchKeyword), 'gi'),
      (match) => {
        return '<span class="highlighted__text">' + match + '</span>'
      }
    )
  }

  onBlur($e: FocusEvent): void {
    const relatedTargetEl = $e.relatedTarget as Element
    if (relatedTargetEl?.localName === 'a') return
    this.searchDropdownShow = false
  }
  // </editor-fold>

  onToggleBg() {
    if (document.body.classList.contains('freeui--dark')) {
      document.body.classList.remove('freeui--dark')
    } else {
      document.body.classList.add('freeui--dark')
    }
  }
}
</script>

<style>
body.freeui--dark {
  background-color: var(--freeui-color-gray-900);
}
</style>

<style lang="scss" scoped>
@mixin navContainer {
  padding: 0 20px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}
.nav {
  &__main {
    background-color: var(--freeui-color-gray-50);
    border-bottom: 1px solid var(--freeui-color-gray-200);
    height: 60px;
    .freeui--dark & {
      background-color: var(--freeui-color-gray-800);
      border-color: var(--freeui-color-gray-700);
    }
    &-container {
      @include navContainer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }
    &-logo {
      font-size: 2.4rem;
      color: var(--freeui-color-gray-900);
      .freeui--dark & {
        color: var(--freeui-color-gray-50);
      }
      span {
        font-weight: 600;
        color: var(--freeui-color-blue-500);
      }
    }
    &-links {
      display: flex;
      gap: 15px;
      list-style: none;
      li {
        a {
          text-decoration: none;
          color: var(--freeui-color-gray-900);
          .freeui--dark & {
            color: var(--freeui-color-gray-50);
          }
        }
      }
    }
  }
  &__sub {
    background-color: var(--freeui-color-gray-100);
    border-bottom: 1px solid var(--freeui-color-gray-200);
    height: 40px;
    .freeui--dark & {
      background-color: var(--freeui-color-gray-900);
      border-color: var(--freeui-color-gray-800);
    }
    &--fixed {
      position: fixed;
      z-index: 90;
      top: 0;
      left: 0;
      right: 0;
      animation: fadeIn 0.5s linear;
      @keyframes fadeIn {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(0);
        }
      }
    }
    &-container {
      @include navContainer;
      display: flex;
      align-items: center;
      height: 100%;
    }
    &-search {
      width: 100%;
      position: relative;
      input {
        border: none;
        background: transparent;
        height: 30px;
        width: 100%;
        max-width: 300px;
        color: var(--freeui-color-gray-900);
        .freeui--dark & {
          color: var(--freeui-color-gray-400);
        }
        &::placeholder {
          color: var(--freeui-color-gray-700);
          .freeui--dark & {
            color: var(--freeui-color-gray-600);
          }
        }
        &:focus {
          outline: none;
        }
      }
      &__dropdown {
        position: absolute;
        top: calc(100% + 5px);
        left: 0;
        z-index: 100;
        width: 100%;
        max-width: 280px;
        background-color: var(--freeui-color-gray-100);
        border: 1px solid var(--freeui-color-gray-200);
        border-top: none;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        padding: 15px 10px;
        ul {
          margin: 0;
          list-style: none;
          li {
            ::v-deep {
              .highlighted__text {
                color: var(--freeui-color-blue-600);
              }
            }
          }
        }
        & > ul {
          padding: 0;
          & > li {
            font-size: 12px;
            font-weight: 600;
            &:not(:last-child) {
              margin-bottom: 15px;
            }
            & > span {
              display: block;
              margin-bottom: 5px;
              text-transform: uppercase;
            }
            ul {
              padding: 0 0 0 10px;
              li {
                font-size: 12px;
                font-weight: 400;
                &:not(:last-child) {
                  margin-bottom: 5px;
                }
                a {
                  color: var(--freeui-color-gray-500);
                  text-decoration: none;
                  & > span {
                    &:before {
                      content: '- ';
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
