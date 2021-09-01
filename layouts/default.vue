<template>
  <div class="layout">
    <InternalNavbar />
    <div class="main__container">
      <main class="main">
        <aside class="aside">
          <div class="aside__container">
            <ul v-if="asideNavigation.length" class="aside__ul-main">
              <li
                v-for="(category, categoryIndex) in asideNavigation"
                :key="`${category.id}--${categoryIndex}`"
              >
                {{ category.name }}
                <ul v-if="category.items.length">
                  <li
                    v-for="(item, itemIndex) in category.items"
                    :key="`${item.slug}--${itemIndex}-${categoryIndex}`"
                  >
                    <nuxt-link :to="item.slug">{{ item.name }}</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <div class="root">
          <Nuxt />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { AsideNavigationInterface } from '~/interfaces/internal/InternalLayoutInterface'
import InternalNavbar from '~/components/Internal/Navbar/InternalNavbar.vue'
@Component({
  components: { InternalNavbar },
})
export default class LayoutDefault extends Vue {
  // Data
  asideNavigation: AsideNavigationInterface[] = []
  // Hooks
  async fetch() {
    const data = await this.$content('aside/items').fetch()
    // @ts-ignore
    this.asideNavigation = data.navigation as AsideNavigationInterface[]
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}
html {
  scrollbar-width: thin;
  scrollbar-color: var(--freeui-color-gray-800) var(--freeui-color-gray-100);
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-track {
    background: var(--freeui-color-gray-100);
  }
  *::-webkit-scrollbar-thumb {
    background: var(--freeui-color-gray-800);
    border: 1px solid var(--freeui-color-gray-900);
    &:hover {
      background-color: var(--freeui-color-gray-700);
    }
  }
}
#__nuxt,
#__layout,
#__layout > div {
  height: 100%;
}
.language-html * {
  text-shadow: none !important;
}
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: var(--freeui-color-gray-900) !important;
  border: 1px solid var(--freeui-color-gray-800) !important;
  border-radius: 3px !important;
  .freeui--dark & {
    background: var(--freeui-color-gray-800) !important;
    border-color: var(--freeui-color-gray-700) !important;
  }
}

pre[class*='language-'] {
  margin: 0 !important;
}

.freeuiI__codeBlock {
  border: 1px solid var(--freeui-color-gray-100);
  padding: 10px;
  .freeui--dark & {
    border-color: var(--freeui-color-gray-800);
  }
  &-pre {
    border-top: 1px solid var(--freeui-color-gray-100);
    margin-top: 10px;
    padding-top: 10px;
    .freeui--dark & {
      border-color: var(--freeui-color-gray-800);
    }
  }
  &-prism {
    &-actions {
      display: flex;
      justify-content: space-between;
    }
    &-label,
    &-copy {
      background-color: var(--freeui-color-gray-900);
      border: 1px solid var(--freeui-color-gray-800);
      color: var(--freeui-color-gray-400);
      display: inline-block;
      position: relative;
      bottom: -1px;
      left: 10px;
      font-size: 12px;
      padding: 3px 5px;
      .freeui--dark & {
        color: var(--freeui-color-gray-400);
        background-color: var(--freeui-color-gray-800);
        border-color: var(--freeui-color-gray-700);
      }
    }
    &-copy {
      left: initial;
      right: 10px;
      cursor: pointer;
    }
  }
}
</style>

<style lang="scss" scoped>
@mixin mainContainer {
  padding: 0 20px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}
.layout {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
}
.main {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 20px;
  min-height: 100%;
  &__container {
    @include mainContainer;
  }
}
.aside {
  border-right: 1px solid var(--freeui-color-gray-100);
  .freeui--dark & {
    border-color: var(--freeui-color-gray-800);
  }
  padding: 20px 0;
  &__container {
    position: sticky;
    top: 60px;
    z-index: 1;
    color: var(--freeui-color-gray-900);
    .freeui--dark & {
      color: var(--freeui-color-gray-600);
    }
  }
  &__ul {
    &-main {
      list-style: none;
      padding: 0;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      gap: 10px;
      ul {
        margin-top: 10px;
        font-size: 14px;
        font-weight: 400;
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
        li {
          &:before {
            content: '-';
            margin-right: 5px;
            color: var(--freeui-color-gray-600);
            .freeui--dark & {
              color: var(--freeui-color-gray-400);
            }
          }
          a {
            text-decoration: none;
            color: var(--freeui-color-gray-600);
            .freeui--dark & {
              color: var(--freeui-color-gray-400);
            }
            &:hover,
            &.nuxt-link-exact-active {
              color: var(--freeui-color-blue-600);
            }
          }
        }
      }
    }
  }
}
.root {
  padding: 20px 0;
}
</style>
