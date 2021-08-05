import Vue from 'vue'
import Vuex from 'vuex'
import { getNotificationData } from '../utils/NotifcationBuilder'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notifications: getNotificationData(20, 0)
  },
  mutations: {
    SET_NOTIFICATIONS (state, notifications) {
      // console.log('set_notifications')
      state.notifications = notifications
    }
  },
  getters: {
    getAllNotifications (state) {
      return state.notifications
    },
    getRecentNotifications (state) {
      return state.notifications.slice(0, 5)
    }
  },
  actions: {
  },
  modules: {
  }
})
