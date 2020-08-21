<template>
  <v-container fluid>
      <v-list-item-group v-model="selected">
        <v-list-item two-line v-for="item in itens" :key="item.id" @click="showItem(item.id)">
          <v-list-item-content>
            <v-list-item-title>{{item.name || item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-row><slot></slot></v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Lista',
  props: ['itens'],
  data () {
    return {
      selected: null,
      item: null
    }
  },
  methods: {
    showItem(id) {
      this.$emit("showItem");
    }
  }
}
</script>

<style scoped>

</style>
