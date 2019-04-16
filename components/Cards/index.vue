<template>
  <section class="container">
    <Card v-for="(card, index) in $store.getters.getNotes" :key="index" :card="card"/>
  </section>
</template>

<script>

import Card from '~/components/Cards/Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>

</style>

