<template>
  <v-container fluid>
      <v-list-item-group v-model="selected" color="purple">
        <v-list-item two-line v-for="item in items" :key="item">
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
            {{item.subtitle}}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
  </v-container>
</template>

<script>
export default {
  name: 'Lista',
  data () {
    return {
      selected: null,
      item: null,
      items: [
        {
          title: 'Ali Connors',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
