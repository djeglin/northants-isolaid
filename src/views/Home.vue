<template>
  <main>
    <Header @toggleSettings="toggleSettings" />
    <Body :minArea="minArea" :maxArea="maxArea" />
    <Footer />
    <transition name="fade">
      <Settings
        v-show="showSettings"
        @setRange="setRange"
        @close="toggleSettings"
      />
    </transition>
  </main>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// @ is an alias to /src
import Header from '@/components/Header'
import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Settings from '@/components/Settings'

@Component({
  components: {
    Header,
    Body,
    Footer,
    Settings,
  },
})
export default class Home extends Vue {
  showSettings = false
  minArea = 0
  maxArea = 999999999

  toggleSettings() {
    this.showSettings = !this.showSettings
  }

  setRange(range) {
    this.minArea = range.lower
    this.maxArea = range.upper
  }
}
</script>

<style scoped>
main {
  @apply flex flex-col min-h-screen;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
