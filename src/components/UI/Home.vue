<template>
  <div class="container">
    <Header/>
    <main>
      <v-tabs v-model="tab" align-with-title>
        <v-tab>
          Livros
        </v-tab>
        <v-tab>
          Autores
        </v-tab>
        <v-tab>
          Editoras
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text>aaaaaaa</v-card-text>
            <router-view />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>aaaaadddddaa</v-card-text>
            <router-view />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>aaagggggaaaa</v-card-text>
            <router-view />
          </v-card>
        </v-tab-item>
      </v-tabs-items>

    </main>
    <Footer/>
  </div>
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
