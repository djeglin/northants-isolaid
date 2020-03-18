<template>
  <div>
    <Map @dropPin="updateAreas" :hidePin="hidePin" />
    <transition name="slideIn">
      <Sidebar v-if="areas && areas.length" :areas="areas" @close="close" />
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import Map from '@/components/Map'
import Sidebar from '@/components/Sidebar'

@Component({
  components: {
    Map,
    Sidebar,
  },
})
export default class Body extends Vue {
  hidePin = false

  areas = () => []

  updateAreas(arr) {
    this.hidePin = false
    this.areas = [...arr]
  }

  close() {
    this.hidePin = true
    this.areas = []
  }
}
</script>

<style scoped>
div {
  @apply w-full flex-grow flex;
}
.slideIn-enter,
.slideIn-leave-to {
  margin-right: -100%;
}
.slideIn-enter-active,
.slideIn-leave-active {
  transition: margin-right 0.3s ease;
}
</style>
