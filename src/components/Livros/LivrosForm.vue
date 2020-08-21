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
          item-text="nome"
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
      rules: {
        titulo: [],
        ano: [],
        autor: [],
      }
    }
  },
  methods: {
    salvarLivro() {
      consolr.log('livro salvo');
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
