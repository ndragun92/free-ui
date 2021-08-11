<template>
  <div ref="nav" class="nav">
    <nav class="nav__main">
      <div class="nav__main-container">
        <div class="nav__main-logo">FREE<span>UI</span></div>
        <div>
          <ul class="nav__main-links">
            <li>
              <a href="#">Home</a>
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
          <input type="search" placeholder="Search docs..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class InternalNavbar extends Vue {
  // Data
  offsetTop: number = 0
  navHeight: number = 100
  // Hooks
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll)
      this.navHeight = (this.$refs.nav as HTMLElement).offsetHeight
    })
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  }

  // Methods
  onScroll() {
    this.offsetTop = window.top.scrollY
  }
}
</script>

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
    &-container {
      @include navContainer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }
    &-logo {
      font-size: 2.4rem;
      span {
        font-weight: 600;
        color: dodgerblue;
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
        }
      }
    }
  }
  &__sub {
    background-color: var(--freeui-color-gray-100);
    border-bottom: 1px solid var(--freeui-color-gray-200);
    height: 40px;
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
      input {
        border: none;
        background: transparent;
        height: 30px;
        width: 100%;
        max-width: 300px;
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
