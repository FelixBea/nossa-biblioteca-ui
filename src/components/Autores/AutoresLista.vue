<template>
  <Lista :itens="autores" />
</template>

<script>
import Lista from '../UI/Lista'

export default {
  name: 'AutoresLista',
  components: {'Lista': Lista},
  data() {
    return {
      autores: [
        {id: 1, name: 'Um autor'},
        {id: 2, name: 'Outro autor'},
        {id: 3, name: 'Outro autor ainda'}
      ]
    }
  },
  methods: {
    async loadAutores() {
      const autores = await fetch("http://localhost:8000/api_v1/autores");
      this.autores = await autores.json();
    }
  },
  async created() {
    await this.loadAutores();
  }
}
</script>

<style scoped>


</style>
