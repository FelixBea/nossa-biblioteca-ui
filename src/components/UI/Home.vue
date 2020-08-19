<template>
  <div class="container">
    <Header/>
    <main>
      <router-view />
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Home',
  components: { 'Header': Header, 'Footer': Footer }
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #EEE;
}

main {
  width: 100%;
  position: relative;
  box-sizing: border-box;
}

</style>
