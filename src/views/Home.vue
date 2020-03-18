<template>
  <main>
    <Header />
    <Map />
    <Footer />
  </main>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// @ is an alias to /src
import Header from '@/components/Header'
import Map from '@/components/Map'
import Footer from '@/components/Footer'

@Component({
  components: {
    Header,
    Map,
    Footer,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
main {
  @apply flex flex-col min-h-screen;
}
</style>
