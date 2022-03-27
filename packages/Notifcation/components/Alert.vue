<template>
  <div>
    <v-alert
      v-model="alert"
      color="primary"
      border="left"
      elevation="2"
      colored-border
      :icon="dialog ? 'mdi-email-open' : 'mdi-email'"
    >
      <v-list three-line>
        <v-list-item>
          <v-list-item-action>
            <v-list-item-action-text
              class=""
              v-text="date"
            ></v-list-item-action-text>
          </v-list-item-action>
          <v-list-item-avatar class="mr-2">
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="title"></v-list-item-title>
            <v-list-item-subtitle v-html="description"></v-list-item-subtitle>
          </v-list-item-content>
          <v-card-actions>
            <v-checkbox
              v-model="selectedNotification"
              @click.stop="updateParent;"
              :value="receivedNotifications.id"
            ></v-checkbox>

            <!-- read and unread here  -->
            <!-- <v-icon
                  color="success darken-3"
                >
                  mdi-email
                </v-icon>

                <v-icon
                  color="success darken-3"
                >
             mdi-email-open
                </v-icon> -->
            <v-menu transition="slide-y-transition" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  @click.prevent.stop="toggleDots(receivedNotifications)"
                  class="dots-position"
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-dots-vertical
                </v-icon>
              </template>
              <Ellipsis v-if="this.$route.path == '/Received'" :selected="selected"></Ellipsis>
              <TrashEllipsis  v-if="this.$route.path == '/Trash'" :selected="selected"></TrashEllipsis>
            </v-menu>
          </v-card-actions>
        </v-list-item>
      </v-list>
    </v-alert>
  </div>
</template>

<script>
import Ellipsis from "./Ellipsis.vue";
export default {
  name: "alert",
  components: {
    Ellipsis,
  },
  props: [
    "title",
    "description",
    "date",
    "receivedNotifications",
    "selectedNotification",
    "allSelected",
    "select",
    "dialog",
  ],
  data() {
    return {
      alert: true,
      selected: "",
    };
  },
  computed: {
    showAlert() {
      return this.$store.getter.showAlert;
    },
    updateParent() {
      console.log("reacehd child update parent func");
      this.$emit("updateSelected", this.receivedNotifications.id);
      this.$emit("updateselectedNotification",this.selectedNotification);
      this.$store.commit("updateSelected", this.receivedNotifications.id);
    },
    
  },
  methods: {
    toggleDots(notificationDetails) {
      this.showDotsToggle = !this.showDotsToggle;

      this.$store.dispatch("getNotificationDetails", notificationDetails);
      return (this.selected = notificationDetails);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>