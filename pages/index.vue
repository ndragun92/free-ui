<template>
  <div>
    <h1>Homepage</h1>
    <p v-for="n in 100" :key="n">{{ n }}. Row</p>
  </div>
</template>
