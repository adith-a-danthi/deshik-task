<template>
  <div ref="ps" id="scrollbar" class="mt-8">
    <v-sheet width="65vw" class="mx-auto">
      <h1>Notifications</h1>
      <NotificationComponent
        v-for="(notification, index) in notifications"
        v-bind:key="notification.id"
        :notification="notification"
        :index="index"
      ></NotificationComponent>
    </v-sheet>
  </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
import { getNotificationData, pageSize } from '../utils/NotifcationBuilder'
import NotificationComponent from '../components/NotificationComponent'

export default {
  name: 'Notifications',
  components: { NotificationComponent },
  mounted () {
    const ps = new PerfectScrollbar('#scrollbar')
    // ps.update()
    const container = document.querySelector('#scrollbar')
    container.addEventListener('ps-scroll-y', () => {
      // console.log('scroll')
      const notifications = this.notifications
      notifications.push(...getNotificationData(pageSize, this.notifications.length))
      this.$store.commit('SET_NOTIFICATIONS', notifications)
      // this.notifications.push(...getNotificationData(pageSize, this.notifications.length))
      ps.update()
    })
  },
  computed: {
    notifications () {
      return this.$store.getters.getAllNotifications
    }
  }
}
</script>

<style scoped>
html,body {
  overflow: hidden;
}

#scrollbar {
  margin: auto;
  padding: 1em;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
}
/*.ps.ps--active-x > .ps__rail-x,*/
/*.ps.ps--active-y > .ps__rail-y {*/
/*  !*display: none; !* remove this! *!*!*/
/*}*/
</style>
