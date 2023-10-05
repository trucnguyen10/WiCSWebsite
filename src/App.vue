<template>
  <HomePage/>
  <AboutPage/>
  <OurTeam/>
  <FooterPage/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FooterPage from './components/FooterPage.vue'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import OurTeam from './components/OurTeam.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePage,
    FooterPage, 
    AboutPage, 
    OurTeam
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
