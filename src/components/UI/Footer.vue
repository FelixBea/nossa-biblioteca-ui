<template>
  <footer>
    <v-container>
      <v-row justify="end">
        <v-btn large color="purple" dark @click="showForm.show = true">Adicionar novo livro</v-btn>
        <LivrosForm acao="Adicionar" :show="showForm" @success="fechaDialog"/>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
import LivrosForm from '../Livros/LivrosForm'

export default {
  name: 'Footer',
  components: {'LivrosForm': LivrosForm},
  data() {
    return {
      showForm: {show: false},
      successAlert: false
    }
  },
  methods: {
    fechaDialog() {
      this.showForm.show = false;
    }
  }
}
</script>

<style scoped>

footer {
  width: 100%;
  height: 65px;
  background-color: #CCC;
  opacity: 0.6;
  position: relative;
  box-sizing: border-box;
}

</style>
