<template>
  <!--  <v-row class="ma-1">
      <v-col cols="2">
        <v-avatar>
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
      </v-col>
      <v-col cols="10" class="justify-items-center">
        <v-row justify="space between">
          <h4 class="col py-0 text-overflow-ellipsis">
            {{notification.title}}
          </h4>
          <small class="text-right col py-0">
            {{notification.timestamp}}
          </small>
        </v-row>
        <v-row>
          <p class="py-1 my-1 text-overflow-ellipsis">
            {{notification.message}}
          </p>
        </v-row>
      </v-col>
    </v-row>-->
  <v-list-item :key="notification.id" class="px-0" @click="markAsRead(notification, index)">
    <v-badge
      dot
      left
      inline
      color="indigo darken-3"
      :value="notification.unread"
    >
      <v-list-item-avatar class="ma-1 mr-2">
        <v-avatar>
          <img
            :src="notification.image"
            alt="John"
          >
        </v-avatar>
      </v-list-item-avatar>

    </v-badge>
    <v-list-item-content>
      <v-list-item-title v-text="notification.title"></v-list-item-title>

      <v-list-item-subtitle v-text="notification.message"></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-list-item-action-text v-text="getTimeAgo(notification.timestamp)"></v-list-item-action-text>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { timeAgo } from '../utils'

export default {
  name: 'NotificationComponent',
  props: {
    notification: {
      type: Object,
      default () {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getTimeAgo: function (time) {
      return timeAgo.format(Date.now() - time)
    },
    markAsRead (notification, index) {
      // console.log('mark as read')
      notification.unread = false
      const notifications = this.$store.getters.getAllNotifications
      this.$set(notifications, index, notification)
      this.$store.commit('SET_NOTIFICATIONS', notifications)
    }
  }
}
</script>

<style scoped>
.text-overflow-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
