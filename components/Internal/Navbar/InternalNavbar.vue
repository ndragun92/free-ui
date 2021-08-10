<template>
  <div class="nav">
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
    <div class="nav__sub">
      <div class="nav__sub-container">
        <div class="nav__sub-search">
          <input type="search" placeholder="Search docs..." />
        </div>
      </div>
    </div>
  </div>
</template>

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
