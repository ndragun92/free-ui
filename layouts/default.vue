<template>
  <div class="layout">
    <InternalNavbar />
    <div class="main__container">
      <main class="main">
        <aside class="aside">Aside</aside>
        <div class="root">
          <Nuxt />
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class LayoutDefault extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}
#__nuxt,
#__layout,
#__layout > div {
  height: 100%;
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
  padding: 20px 0;
}
.root {
  padding: 20px 0;
}
</style>
