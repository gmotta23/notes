import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      notesArray: JSON.parse(localStorage.getItem('notesArray'))
    },
    getters: {
      getNotes (state) {
        return state.notesArray
      }
    },
    mutations: {
      updateNotesArray(state, newArray) {
        state.notesArray = newArray
      },
      deleteAll(state) {
        localStorage.removeItem('notesArray')
        state.notesArray = []
      }
    },
    actions: {
      async addNote({state, commit}, newNote) {        
        let array = await JSON.parse(localStorage.getItem('notesArray'))
        //caso localStorage nao tenha o array procurado, gera-se um
        if (!array) {
          array = []
        }
        if (newNote.length === 0 || array[array.length-1] === newNote) {
          alert('Please insert a valid note.')
          return 0
        }

        array.push(newNote)
        localStorage.setItem('notesArray', JSON.stringify(array))
        commit('updateNotesArray', array)

      }
    }
  })
}

export default createStore