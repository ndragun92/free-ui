<template>
  <div>
    <InternalNavbar />
    <Nuxt />
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
</style>
