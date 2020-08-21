<template>
  <v-app>
    <div class="container-view">
      <Header/>
      <main>
        <v-tabs v-model="tab" grow align-with-title>
          <v-tab to="/livros">
            Livros
          </v-tab>
          <v-tab to="/autores">
            Autores
          </v-tab>
          <v-tab to="/editoras">
            Editoras
          </v-tab>
        </v-tabs>
        <router-view />
      </main>
      <Footer/>
    </div>
  </v-app>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Home',
  components: { 'Header': Header, 'Footer': Footer },
  data () {
    return {
      tab: null
    }
  }
}
</script>

<style scoped>
.container-view {
  width: 100vw;
  height: 100vh;
  background-color: #EEE;
  display: flex;
  flex-flow: column nowrap;
  justify: stretch;
}

main {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  flex: 1 1 auto;
}

</style>
