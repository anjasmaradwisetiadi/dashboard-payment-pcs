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

  }
})
