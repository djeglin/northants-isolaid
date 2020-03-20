<template>
  <header>
    <h1>Covid-19 Mutual Aid Map</h1>
    <button @click.prevent="toggleSettings">⚙</button>
  </header>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Header extends Vue {
  toggleSettings() {
    this.$emit('toggleSettings')
  }
}
</script>

<style scoped>
header {
  @apply flex items-start bg-white text-black px-8 py-4 shadow-md z-10;
}
h1 {
  @apply p-0 m-0 flex-grow-0 text-2xl;
}
button {
  @apply ml-auto border-0 text-2xl py-1 px-0 cursor-pointer;
}
</style>
