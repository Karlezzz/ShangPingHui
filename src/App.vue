<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>

</template>

<script>
  import Header from './components/Header/Header.vue'
  import Footer from './components/Footer/Footer.vue'
  export default {
    name: 'App',
    components: {
      Footer,
      Header
    },
  }
</script>

<style>

</style>