<template>
  <GmapMap
    class="map"
    :center="{ lat: 52.238865, lng: -0.903705 }"
    :zoom="12"
    :options="{
      mapTypeControl: false,
    }"
  >
    <GmapPolygon
      v-for="(area, index) in areas"
      :key="index"
      :paths="
        area.points.map(point => ({
          lat: point.latitude,
          lng: point.longitude,
        }))
      "
    >
    </GmapPolygon>
  </GmapMap>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import axios from 'axios'
import { gmapApi } from 'vue2-google-maps'

@Component
export default class Map extends Vue {
  areas = []

  async created() {
    const res = await axios.get('/.netlify/functions/getAreas')
    const areas = res.data.areas
    this.areas.push(...areas)
  }

  getPathsForArea(area) {
    const points = area.points
    const gPoints = points.map(point =>
      this.google.maps.LatLng(point.latitude, point.longitude)
    )
    return gPoints
  }

  get google() {
    return gmapApi
  }
}
</script>

<style>
.vue-map-container {
  @apply w-full flex-grow;
}
.vue-map-container .vue-map {
  @apply absolute top-0 right-0 bottom-0 left-0
}
</style>
