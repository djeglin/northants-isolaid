<template>
  <GmapMap
    class="map"
    :center="center"
    :zoom="12"
    :options="{
      mapTypeControl: false,
    }"
    @click="dropPin"
    ref="map"
  >
    <GmapPolygon
      v-for="area in areas"
      :key="area.userId"
      :paths="
        area.points.map(point => ({
          lat: point.latitude,
          lng: point.longitude,
        }))
      "
      :strokeColor="area.color"
      strokeOpacity="0.9"
      :fillColor="area.color"
      fillOpacity="0.2"
      :clickable="true"
      :draggable="false"
      @click="dropPin"
      ref="polygon"
    >
    </GmapPolygon>
    <GmapMarker v-if="pin.lat && pin.lng" :position="pin" />
  </GmapMap>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import axios from 'axios'

@Component
export default class Map extends Vue {
  areas = []
  center = { lat: 52.238865, lng: -0.903705 }
  pin = { lat: null, lng: null }
  geometry = null

  async created() {
    const res = await axios.get('/.netlify/functions/getAreas')
    const areas = res.data.areas
    areas.forEach(area => {
      area.color = '#000000'
    })
    this.areas.push(...areas)
  }

  dropPin(e) {
    // console.log(e)
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    this.pin.lat = lat
    this.pin.lng = lng
    this.$refs.map.panTo({ lat, lng })
  }
}
</script>

<style>
.vue-map-container {
  @apply w-full flex-shrink;
}
.vue-map-container .vue-map {
  @apply absolute top-0 right-0 bottom-0 left-0;
}
</style>
