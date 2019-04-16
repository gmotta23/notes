<template>
  <div class="card">
    {{$store.getters.getNotes.indexOf(card)+1}}.
    <div v-if="!editing">
      {{card}}
      <button @click.prevent="enableEdit(card)">Edit</button>
      <button @click.prevent="remove(card)">Delete</button>
    </div>
    <div v-if="editing">
      <input v-model="newCard">
      <button @click.prevent="saveEdit(card)">Save</button>
      <button @click.prevent="cancelEdit(card)">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
      newCard: []
    }
  },
  props: {
    card: {
      required: true
    }
  },
  methods: {
    async enableEdit(card) {
      this.editing = true
      this.newCard = card
    },
    cancelEdit(card) {
      this.editing = false
    },
    async saveEdit(card) {
      let index = await this.$store.getters.getNotes.indexOf(card)
      let array = await JSON.parse(localStorage.getItem('notesArray'))
      array[index] = this.newCard
      localStorage.setItem('notesArray', JSON.stringify(array))
      this.$store.commit('updateNotesArray', array)
      this.editing = false
    },
    async remove(card) {
      let index = await this.$store.getters.getNotes.indexOf(card)
      let array = await JSON.parse(localStorage.getItem('notesArray'))

      Array.prototype.remove = function(from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
      };

      await array.remove(index)

      localStorage.setItem('notesArray', JSON.stringify(array))
      this.$store.commit('updateNotesArray', array)
      this.$forceUpdate
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  width: 15rem;
}

</style>

