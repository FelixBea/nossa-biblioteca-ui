<template>
    <v-dialog
      v-model="value.show"
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">{{acao}} {{tipo}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <slot></slot>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="gray darken-1"
            text
            @click="value.show = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="purple darken-1"
            text
            @click="salvarItem"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Item',
  props: ['value','tipo', 'acao'],
  methods: {
    salvarItem() {
      this.$emit("salvarItem");
    }
  },
  watch: {
    value() {
      this.$emit("input", value);
    }
  }
}
</script>

<style scoped>

</style>
