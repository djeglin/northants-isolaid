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
    <div class="searchWrapper" slot="visible">
      <div class="search">
        <GmapAutocomplete
          placeholder="Search for a postcode or area"
          @place_changed="setPlace"
        />
      </div>
    </div>

    <GmapPolygon
      v-for="area in filteredAreas"
      :key="area.userId"
      :paths="
        area.points.map(point => ({
          lat: point.latitude,
          lng: point.longitude,
        }))
      "
      :options="{
        strokeColor: '#000000',
        fillColor: intersecting.map(item => item[0]).includes(area.userId)
          ? '#00CC00'
          : '#000000',
        strokeOpacity: intersecting.length
          ? intersecting.map(item => item[0]).includes(area.userId)
            ? 0.5
            : 0
          : 0.5,
        fillOpacity: intersecting.length
          ? intersecting.map(item => item[0]).includes(area.userId)
            ? 0.05
            : 0
          : 0.05,
        strokeWeight: 2,
      }"
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
    hidePin: {
      type: Boolean,
      default: false,
    },
    targetArea: {
      type: Number,
      default: null,
    },
  },
  watch: {
    hidePin: function(val) {
      if (val) {
        this.pin.lat = null
        this.pin.lng = null
        this.areas.forEach(area => {
          area.color = '#000000'
        })
        this.intersecting = []
        this.tempIntersecting = []
      }
    },
    targetArea: function(val) {
      if (val && val !== null) {
        this.tempIntersecting = [...this.intersecting]
        const area = this.areas.find(area => area.userId === val)
        this.intersecting = [
          [
            area.userId,
            area.points.map(point => [point.latitude, point.longitude]),
          ],
        ]
        // console.log(this.intersecting)
      }
      if (val === null) {
        this.intersecting = this.tempIntersecting
      }
    },
  },
})
export default class Map extends Vue {
  areas = []
  center = { lat: 52.238865, lng: -0.903705 }
  pin = { lat: null, lng: null }
  geometry = null
  intersecting = []
  interval = null

  async created() {
    const res = await axios.get('/.netlify/functions/getAreas')
    // console.log(res)
    const areas = res.data.areas
    this.areas.push(...areas)

    this.interval = setInterval(() => {
      this.computeAreas()
    }, 100)
  }

  get filteredAreas() {
    if (!this.areas.length) return this.areas
    return this.areas.filter(
      area => area.area >= this.minArea && area.area <= this.maxArea
    )
  }

  computeAreas() {
    if (window.google && window.google.maps && this.areas.length) {
      clearInterval(this.interval)
      const areas = [...this.areas]
      areas.forEach(area => {
        const path = area.points.map(
          point =>
            new window.google.maps.LatLng(point.latitude, point.longitude)
        )
        const computedArea = window.google.maps.geometry.spherical.computeArea(
          path
        )
        area.area = computedArea
      })
      this.areas = [...areas]
    }
  }

  dropPin(e) {
    // console.log(e)
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    this.pin.lat = lat
    this.pin.lng = lng
    this.$refs.map.panTo({ lat, lng })

    this.findIntersectingPolys()
  }

  setPlace(place) {
    this.pin.lat = place.geometry.location.lat()
    this.pin.lng = place.geometry.location.lng()
    this.$refs.map.panTo({ lat: this.pin.lat, lng: this.pin.lng })
    this.findIntersectingPolys()
  }

  findIntersectingPolys() {
    const polys = this.filteredAreas.map(area => {
      return [
        area.userId,
        area.points.map(point => [point.latitude, point.longitude]),
        area.area
      ]
    })
    const point = [this.pin.lat, this.pin.lng]
    const intersecting = polys.filter(poly => this.inside(point, poly[1]))
    // console.log(intersecting)
    this.intersecting = intersecting

    this.$emit('dropPin', intersecting)
  }

  inside(point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    const x = point[0]
    const y = point[1]

    let inside = false
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      const xi = vs[i][0]
      const yi = vs[i][1]
      const xj = vs[j][0]
      const yj = vs[j][1]

      const intersect =
        yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
      if (intersect) inside = !inside
    }
    return inside
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
.searchWrapper {
  @apply w-full;
}
.search {
  @apply absolute top-0 left-0 mt-6 ml-6 max-w-xs z-50 w-full shadow-md;
}
.search input {
  @apply block w-full text-lg p-2;
}
</style>
