<template>
  <div>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="(item, i) in mainSettings" :key="i">
        <v-expansion-panel-header>
          <template v-slot:actions>
            <v-icon color="primary"> $expand </v-icon>
          </template>
          <h4>{{ item }}</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <NotificationGeneralSettings
            v-if="item == 'General settings:'"
          ></NotificationGeneralSettings>
          <CreateSettings v-if="item == 'Create notifications:'" />
          <SchedularNotifications v-if="item == 'Schedular notifications:'" />
          <ReceivedNotification v-if="item == 'Received notifications:'" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import CreateSettings from "./CreateNotificationSettings.vue";
import SchedularNotifications from "./SchedularNotifications.vue";
import NotificationGeneralSettings from "./NotificationGeneralSettings.vue";
import ReceivedNotification from "./ReceivedNotification.vue";

export default {
  name: "notificationsExpansionPanel",
  components: {
    CreateSettings,
    SchedularNotifications,
    NotificationGeneralSettings,
    ReceivedNotification,
  },

  data() {
    return {
      panel: [],
      mainSettings: [
        "General settings:",
        "Create notifications:",
        "Schedular notifications:",
        "Received notifications:",
      ],

      expand: false,
      searchQuery: "",
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>