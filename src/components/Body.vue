<template>
  <div>
    <Map
      @dropPin="dropPin"
      @updateAreas="updateAreas"
      :hidePin="hidePin"
      :targetArea="targetArea"
      :minArea="minArea"
      :maxArea="maxArea"
    />
    <transition name="slideIn">
      <Sidebar
        v-if="areas && areas.length"
        :areas="areas"
        :minArea="minArea"
        :maxArea="maxArea"
        @close="close"
        @setTargetArea="setTargetArea"
      />
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import Map from '@/components/Map'
import Sidebar from '@/components/Sidebar'

@Component({
  props: {
    minArea: {
      type: Number,
      required: true,
    },
    maxArea: {
      type: Number,
      required: true,
    },
  },

  components: {
    Map,
    Sidebar,
  },
})
export default class Body extends Vue {
  hidePin = false
  targetArea = null

  areas = () => []

  dropPin(arr) {
    this.hidePin = false
    this.updateAreas(arr)
  }

  updateAreas(arr) {
    this.areas = [...arr]
  }

  setTargetArea(id) {
    this.targetArea = id
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
