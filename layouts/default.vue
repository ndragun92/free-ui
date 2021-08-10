<template>
  <div class="layout">
    <InternalNavbar />
    <main class="main">
      <aside class="aside">Aside</aside>
      <div class="root">
        <Nuxt />
      </div>
    </main>
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
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
.layout {
  display: flex;
  flex-direction: column;
}
.main {
  @include mainContainer;
  display: flex;
  gap: 20px;
  height: 100%;
}
.aside {
  width: 300px;
  border-right: 1px solid var(--freeui-color-gray-100);
  padding: 20px 0;
}
.root {
  flex-grow: 1;
  min-width: 0;
  padding: 20px 0;
}
</style>
