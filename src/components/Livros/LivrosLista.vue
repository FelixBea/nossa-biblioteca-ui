<template>
  <Lista :itens="livros" @showItem="showForm.show = true">
    <LivrosForm acao="Criar" :show="showForm"/>
  </Lista>
</template>

<script>
import Lista from '../UI/Lista'
import LivrosForm from './LivrosForm'

export default {
  name: 'LivrosLista',
  components: {'Lista': Lista, 'LivrosForm': LivrosForm},
  data() {
    return {
      livros: [
        {id: 1, name: 'Um livro'},
        {id: 2, name: 'Outro livro'},
        {id: 3, name: 'Outro livro ainda'}
      ],
      showForm: {show: false}
    }
  },
  methods: {
    async loadLivros() {
      const livros = await fetch("http://localhost:8000/api_v1/livros");
      this.livros = await livros.json();
    }
  },
  async created() {
    await this.loadLivros();
  }
}
</script>

<style scoped>


</style>
