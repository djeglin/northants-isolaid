<template>
  <aside>
    <button @click="close"><span>Close</span>X</button>
    <h2>Area IDs containing selected point:</h2>
    <ul>
      <li v-for="area in areas" :key="area[0]">{{ area[0] }}</li>
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
      default: () => [],
    },
  },
})
export default class Sidebar extends Vue {
  close() {
    this.$emit('close')
  }
}
</script>

<style scoped>
aside {
  @apply w-1/5 bg-white p-4 relative;
}
h2 {
  @apply pt-0 mt-0;
}
ul {
  @apply p-0 mt-8 flex flex-wrap;
}
li {
  @apply block p-1 border-solid border-black border mr-2 text-xl font-bold;
}
button {
  @apply absolute top-0 right-0 mt-4 mr-4 bg-white border-solid border-2 border-black font-bold text-xl cursor-pointer;
  transition: all 0.2s ease;
}
button:hover {
  @apply bg-black text-white;
}
button span {
  @apply hidden;
}
</style>
