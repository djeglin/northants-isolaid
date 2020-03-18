<template>
  <main>
    <Header />
    <Body />
    <Footer />
  </main>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// @ is an alias to /src
import Header from '@/components/Header'
import Body from '@/components/Body'
import Footer from '@/components/Footer'

@Component({
  components: {
    Header,
    Body,
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
