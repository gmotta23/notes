<template>
  <section class="container">
    <div class="title">Notes</div>
    <New/>
    <div class="options">
      <button class="btn" @click.prevent="deleteAll()">Delete all</button>
    </div>
    <!-- <div class="cards">
      <div class="card" v-for="(item, index) in $store.getters.getNotes" :key="index">
        {{$store.getters.getNotes.indexOf(item)+1}}. {{item}}
      </div>
    </div> -->
    <Cards/>
  </section>
</template>

<script>

import New from '~/components/New.vue'
import Cards from '~/components/Cards/index.vue'

export default {
  components: {
    New,
    Cards,
  },
  methods: {
    async deleteAll() {
      await this.$store.commit('deleteAll')
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  padding-left: 1rem;
}

.title {
  padding-left: 1rem;
  font-size: 2rem;
}

.options {
  padding-left: 1rem;
  //display: grid;
}

</style>
