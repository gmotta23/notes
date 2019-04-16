<template>
  <div class="container">
    <textarea class="textbox" v-model="note"></textarea>
    <button class="btn" @click.prevent="addNote(note)">Add note</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: ''
    }
  },
  methods: {
    async addNote(note) {
      await this.$store.dispatch('addNote', note)
      this.note = ''
    }
  }
}
</script>

<style lang="scss" scoped>

.textbox {
  margin-top: 1.6rem;
  display: grid;
  height: 5rem;
  width: 50%;
  resize: none;
  .btn {
    width: 1rem;
  }
}

</style>
