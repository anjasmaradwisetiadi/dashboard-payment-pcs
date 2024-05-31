import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {dataUser, dataCarousel, personOnline} from '../assets/dataDummy/dashboardData'

export const useDashboardStore = defineStore('dashboard', {
  state : () =>{
    return {
      user: dataUser,
      news: dataCarousel,
      personOnline: personOnline
    }
  },

  actions:{

  },

  getters: {
    getterPersonOnline(state) {
      // handle show when online user just 10 user when data more than 10, reduce rendering element not used
      const data = state.personOnline.data?.length >= 10 ? state.personOnline.data.slice(0,11): state.personOnline.data
      return data
    },
  }
})
