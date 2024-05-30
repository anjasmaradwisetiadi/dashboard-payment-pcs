import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('dashboard', {
  state : () =>{
    return {
      count: 0,
    }
  },

  actions:{

  },

  getters: {

  }
})
