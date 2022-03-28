<template>
          <v-container class="py-8 px-6" fluid>
            <Navbar></Navbar>
            <v-app-bar
              width="100%"
              outlined
              color="white"
              class="overflow-hidden mb-3"
            >
              <!-- fir the filter -->

              <v-icon
                @click="hasHistory() ? $router.go(-1) : $router.push('/')"
                class="my-5 btn btn-outline-success"
                >&laquo; Back> mdi-arrow-left</v-icon
              >
              <v-spacer></v-spacer>
              <v-col class="mt-6" cols="12" md="3" sm="7">
                <v-text-field
                  placeholder="Filter by description"
                  solo
                  clearable
                  dense
                  class="expanding-search"
                  v-model="searchDescription"
                  prepend-inner-icon="mdi-comment-text-outline"
                ></v-text-field>
              </v-col>

              <v-spacer></v-spacer>
              <v-col class="mt-6" cols="12" md="3" sm="7">
                <v-select
                  prepend-inner-icon="mdi-filter-variant"
                  dense
                  solo
                  :items="filters"
                  label="Filer by Time"
                  v-model="timeFilter"
                ></v-select>
              </v-col>
              <v-spacer></v-spacer>

              <v-col cols="12" sm="6" md="3" class="mt-6">
                <v-autocomplete
                  :items="items"
                  dense
                  small-chips
                  v-model="searchQuery"
                  label="Search"
                  solo
                  clearable
                  class="expanding-search"
                  prepend-inner-icon="mdi-magnify"
                ></v-autocomplete>
              </v-col>
            </v-app-bar>
            <div v-if="filteredNotifications.length !== 0">
              <v-row>
                <v-col cols="12">
                  <v-card>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-icon class="mr-3" @click="forceRerender"
                        >mdi-refresh</v-icon
                      >
                      <v-checkbox
                        v-model="allSelected"
                        @click.stop="selectAll"
                        label="Select All"
                        color="red"
                      ></v-checkbox>
                      <v-btn
                        small
                        class="ml-3"
                        color="error"
                        dark
                        v-if="selectedNotification.length > 0"
                        @click="DeleteSelected"
                      >
                        Delete</v-btn
                      >
                    </v-card-actions>
                    <v-subheader> Recent </v-subheader>
                    <v-list two-line>
                      <template
                        v-for="(element, index) in filteredNotifications"
                      >
                        <v-list-item
                          v-if="recent(element.createdAt)"
                          :key="index + '4'"
                          @click="overlay = !overlay"
                          @click.prevent="notificationContent(element)"
                        >
                          <v-list-item-content>
                            <Alert
                              :title="element.notification_subject"
                              :description="element.notification_description"
                              :date="notificationDate(element.createdAt)"
                              :receivedNotifications="element"
                              :selectedNotification="selectedNotification"
                              :allSelected="allSelected"
                              :select="select"
                              @updateSelected="updateChecked"
                              @updateselectedNotification="updateParent"
                              :dialog="dialog"
                            ></Alert>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-icon v-if="dialog" small color="success"
                              >mdi-read</v-icon
                            >
                          </v-list-item-action>
                        </v-list-item>
                      </template>
                    </v-list>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card>
                    <v-subheader> Earlier </v-subheader>

                    <v-list two-line>
                      <template
                        v-for="(element, index) in filteredNotifications"
                      >
                        <v-list-item
                          v-if="earlier(element.createdAt)"
                          :key="index + '4'"
                          @click="overlay = !overlay"
                          @click.prevent="notificationContent(element)"
                        >
                          <v-list-item-content>
                            <Alert
                              :title="element.notification_subject"
                              :description="element.notification_description"
                              :date="notificationDate(element.createdAt)"
                              :receivedNotifications="element"
                              :selectedNotification="selectedNotification"
                              :allSelected="allSelected"
                              :select="select"
                              @updateSelected="updateChecked"
                              @updateselectedNotification="updateParent"
                              :dialog.sync="dialog"
                            ></Alert>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-icon v-if="dialog" small color="success"
                              >mdi-read</v-icon
                            >
                          </v-list-item-action>
                        </v-list-item>

                        <!-- <v-divider
                            v-if="earlier(element.createdAt)"
                            :key="element.id + '1'"
                            inset
                          ></v-divider> -->
                      </template>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </div>
            <div v-else>
              <NoContent></NoContent>
            </div>

            <div>
              <NotificationDetails :dialog.sync="dialog"></NotificationDetails>
            </div>
            <div class="mt-5" v-if="timeFilter === 'All'">
              <div
                slot="widget-content"
                class="text-center"
                style="margin-top: 80px"
              >
                <v-pagination
                  v-model="page"
                  :length="12"
                  :total-visible="7"
                  circle
                />
              </div>
            </div>
            <TheLayoutToTopFab></TheLayoutToTopFab>
          </v-container>

</template>
<script>
import Navbar from "../components/Navbar.vue";

import moment from "moment";
import { mapActions } from "vuex";
import Bar from "../components/Bar.vue";
import ReceivedList from "../components/ReceivedList.vue";
import Ellipsis from "../components/Ellipsis";
import NotificationDetails from "../components/NotificationDetails";
import NoContent from "../components/NoContent.vue";
import TheLayoutToTopFab from "../components/TheLayoutToTopFab.vue";
import axios from "axios";
import Alert from "../components/Alert";
export default {
  layout: "dashboard",

  data: () => ({
    items: [],
    allSelected: false,
    selectedNotification: [],
    notificationTime: [],
    socketN: [],
    afternotification: [],
    dialog: false,
    searchDescription: "",
    notificationActions: ["Reply", "Forward"],
    searchQuery: "",
    timeFilter: "All",
    cards: ["New", "Yesterday", "This Week", "This Month"],
    page: 1,
    selected: "",
    showDotsToggle: false,
    filters: ["All", "Today", "Yesterday", "This week"],
    filterByUserName: "Username",
    filterByDescription: "Description",
    overlay: false,
    zIndex: 0,
    components: {
      Bar,
      ReceivedList,
      TheLayoutToTopFab,
      Ellipsis,
      NotificationDetails,
      NoContent,
      Navbar,
      Alert,
    },
    resources: [],
    panel: [0, 1],
    disabled: false,
    readonly: false,
  }),

  computed: {
    notifications() {
      return this.$store.getters.getAllNotifications;
    },
    checkedNotifications() {
      return this.$store.getters.getAllCheckedNotifications;
    },
    filteredNotifications() {
      if (this.searchQuery) {
        return this.notifications.filter((item) => {
          return item.notification_subject.startsWith(this.searchQuery);
        });
      } else if (this.searchDescription) {
        return this.notifications.filter((item) => {
          return item.notification_description
            .toLowerCase()
            .startsWith(this.searchDescription);
        });
      } else if (this.timeFilter) {
        return this.notifications.filter((notification) => {
          if (this.timeFilter === "Today") {
            const currentTime = moment();

            return (
              moment
                .duration(currentTime.diff(notification.createdAt))
                .asHours() <= 22
            );
          }
          if (this.timeFilter === "Yesterday") {
            const currentTime = moment();
            return (
              moment
                .duration(currentTime.diff(notification.createdAt))
                .asDays() > 1 &&
              moment
                .duration(currentTime.diff(notification.createdAt))
                .asDays() < 2
            );
          }
          if (this.timeFilter === "All") {
            return this.notifications;
          }
          if (this.timeFilter === "This week") {
            const currentTime = moment();

            return (
              moment
                .duration(currentTime.diff(notification.createdAt))
                .asDays() <= 7
            );
          }
        });
      } else {
        return this.notifications;
      }
    },
  },
  updated() {
    return this.$store.getters.getAllNotifications;
  },

  created() {
    this.getNotifications();
    this.getNames();
  },
  methods: {
    updateChecked(element) {
      console.log("updatedd<<<<<<<<<<<", element);
      this.selectedNotification.push(element);
    },
    updateParent(payload) {
      console.log("updatedd<<<<<<<< checkd", payload);

      this.selectedNotification = payload;
    },
    forceRerender() {
      this.$forceUpdate();
    },
    selectAll: function () {
      this.selectedNotification = [];

      if (this.allSelected) {
        for (const notification in this.notifications) {
          this.selectedNotification.push(this.notifications[notification].id);
        }

        // this.notifications.forEach((notifcation) => {
        //   this.selectedNotification.push(this.notifications[notifcation].id)
        // })
      }
    },
    select: function () {
      this.allSelected = false;
    },
    DeleteSelected() {
      let allSelectedNotifications = [];
      this.selectedNotification.forEach((element) => {
        allSelectedNotifications.push(element);
      });
      this.deleteNotification(allSelectedNotifications);
      this.selectedNotification = [];
    },
    getNames() {
      axios.get("/notification-management/notifications").then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          const element = response.data[i].notification_subject;
          this.items.push(element);
        }
      });
    },
    moment: function () {
      return moment();
    },
    earlier(time) {
      const currentTime = moment();
      return moment.duration(currentTime.diff(time)).asHours() > 3;
    },
    recent(time) {
      const currentTime = moment();
      return moment.duration(currentTime.diff(time)).asHours() < 3;
    },
    notificationDate(date) {
      return moment(date).fromNow();
    },
    ...mapActions([
      "getNotifications",
      "setNotification",
      "setSingleNotification",
      "deleteNotification",
    ]),
    notificationContent(notificationDetails) {
      this.dialog = !this.dialog;
      this.$store.dispatch("getNotificationDetails", notificationDetails);
    },
    toggleDots(notificationDetails) {
      this.showDotsToggle = !this.showDotsToggle;

      this.$store.dispatch("getNotificationDetails", notificationDetails);
      return (this.selected = notificationDetails);
    },
    toggleBell() {
      this.showBell = !this.showBell;
      this.messages = 0;
    },
    // this method to check web history
    hasHistory() {
      console.log("history", this.$router.history.length);
      return window.history.length > 2;
    },
  },
};
</script>

<style scoped>
.v-input__slot {
  border-color: transparent;
}
.dots-position {
  margin-left: 52%;
}
.expanding-search {
}
.col {
}
.col-12 {
  width: 100%;
  padding: 12px;
  /* margin: auto; */
}
</style>
