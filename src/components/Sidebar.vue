<template>
  <aside>
    <h2>Area IDs containing selected point:</h2>
    <ul>
      <li v-for="area in areas" :key="area.userId">{{ area.userId }}</li>
    </ul>
  </aside>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    areas: {
      type: Array,
      default: [],
    },
  },
})
export default class Sidebar extends Vue {}
</script>

<style scoped>
aside {
  @apply w-1/5 bg-white p-4;
}
h2 {
  @apply pt-0 mt-0;
}
</style>
