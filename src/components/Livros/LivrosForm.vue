<template>
  <Item tipo="Livro" :acao="acao" v-model="show" @salvarItem="salvarLivro">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-text-field
          label="Título"
          v-model="livro.titulo"
          :rules="rules.titulo"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-text-field
          label="Ano de publicação"
          v-model="livro.ano"
          :rules="rules.ano"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-autocomplete
          :items="autores"
          item-value="id"
          item-text="name"
          label="Autor"
          v-model="livro.autor"
          :rules="rules.autor"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </Item>
</template>

<script>
import Item from '../UI/Item'

export default {
  name: 'LivrosForm',
  props: ['show', 'acao'],
  components: {'Item': Item},
  data () {
    return {
      livro: {
        titulo: "",
        ano: "",
        autor: null
      },
      autores: [],
      successAlert: false,
      rules: {
        titulo: [v => !!v || "Preencha o título"],
        ano: [
          v => Number.isInteger(Number(v)) || "Preencha com um ano válido",
          v => !!v || "Preencha o ano de publicação"
        ],
        autor: [v => !!v || "Preencha o autor"],
      }
    }
  },
  methods: {
    async salvarLivro() {
      try {
        await fetch("http://localhost:8000/api_v1/livros", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: this.livro.titulo,
            year: this.livro.ano,
            author: this.livro.autor
          })
        });
        this.$emit("success");
      } catch (e) {
        console.error(e);
      }
    },

    async carregarAutores() {
      try {
        const autores = await fetch("http://localhost:8000/api_v1/autores");
        this.autores = await autores.json();
      } catch (e) {
        console.error(e);
      }
    }
  },
  async created() {
    this.carregarAutores();
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
