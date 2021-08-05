<template>
  <v-app>
    <v-app-bar
      dense
      app
      flat
    >
      <v-btn
        flat
        icon
        to="/"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-menu bottom rounded offset-y>
        <template v-slot:activator="{on, attrs}">
          <v-btn
            class="mx-2"
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-badge
              dot
              color="indigo darken-3"
            >
              <v-icon color="indigo darken-3">mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-card class="notification-menu">
          <v-card-title>
            Notifications
          </v-card-title>
          <v-card-text class="my-1 overflow-auto">
            <NotificationComponent
              v-for="(notification, index) in recentNotifications"
              v-bind:key="notification.id"
              :notification="notification"
              :index="index"
            />
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              class="text-capitalize"
              text
              small
              elevation="0"
              to="/notifications"
              color="indigo darken-3"
            >
              View All
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>

    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NotificationComponent from './components/NotificationComponent'
import { getNotificationData } from './utils/NotifcationBuilder'

export default {
  name: 'App',
  components: {
    NotificationComponent
  },
  mounted () {
    setInterval(this.simulateAPICall, 3000)
  },
  computed: {
    recentNotifications () {
      return this.$store.getters.getRecentNotifications
    }
  },
  methods: {
    simulateAPICall () {
      const notifications = this.$store.getters.getAllNotifications
      notifications.unshift(...getNotificationData(5, notifications.length))
      this.$store.commit('SET_NOTIFICATIONS', notifications)
    }
  }
}
</script>
<style>
.notification-menu {
  width: 400px;
}
</style>
