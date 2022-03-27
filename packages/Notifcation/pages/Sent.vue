<template>
  <no-ssr>
    <div>
      <v-app>
        <v-main>
          <div class="margin">
            <v-container class="py-8 px-6" fluid>
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
                  <v-select
                    dense
                    solo
                    :items="filters"
                    label="Filer by"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="3" class="mt-6">
                  <v-text-field
                    placeholder="Search"
                    solo
                    clearable
                    dense
                    class="expanding-search"
                    v-model="searchQuery"
                    prepend-inner-icon="mdi-magnify"
                  ></v-text-field>
                </v-col>
              </v-app-bar>
              <div v-if="filteredNotifications.length !== 0">
                <v-row>
                  <v-col cols="12">
                    <v-card>
                      <v-subheader> Sent </v-subheader>
                      <v-list two-line>
                        <template
                          v-for="(element, index) in [filteredNotifications]"
                        >
                          <v-list-item
                            :key="index + '4'"
                            @click="overlay = !overlay"
                            @click.prevent="notificationContent(element)"
                          >
                            <v-list-item-avatar>
                              <v-avatar>
                                <img
                                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                                  alt="John"
                                />
                              </v-avatar>
                            </v-list-item-avatar>
                            <v-list-item-content>
                              <v-list-item-title>
                                {{ element.notification_subject }}
                              </v-list-item-title>
                              <v-list-item-subtitle>
                                {{ element.notification_description }}
                              </v-list-item-subtitle>
                            </v-list-item-content>
                               <v-list-item-action-text>
                              <v-chip
                                color="success"
                                class="ml-0 mr-2 black--text"
                                label
                                small
                              >
                                Sent 
                              </v-chip>
                            </v-list-item-action-text>
                            <v-list-item-action>
                              
                              <v-list-item-action-text
                                v-text="notificationDate(element.createdAt)"
                              ></v-list-item-action-text>

                              <v-menu transition="slide-y-transition" bottom>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-icon
                                    @click.prevent.stop="toggleDots(element)"
                                    class="dots-position"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    mdi-dots-vertical
                                  </v-icon>
                                </template>
                                <Ellipsis :selected="selected"></Ellipsis>
                              </v-menu>
                            </v-list-item-action>
                          </v-list-item>
                          <v-divider :key="element.id + '1'" inset></v-divider>
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
                <NotificationDetails
                  :dialog.sync="dialog"
                ></NotificationDetails>
              </div>
              <div class="mt-5">
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
          </div>
        </v-main>
      </v-app>
    </div>
  </no-ssr>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";
import Bar from "../components/Bar.vue";
import ReceivedList from "../components/ReceivedList.vue";
import Ellipsis from "../components/Ellipsis";
import NotificationDetails from "../components/NotificationDetails";
import NoContent from "../components/NoContent.vue";
import TheLayoutToTopFab from "../components/TheLayoutToTopFab.vue";

export default {
  data: () => ({
    notificationTime: [],
    socketN: [],
    dialog: false,
    afternotification: [],
    notificationActions: ["Reply", "Forward"],
    searchQuery: "",
    cards: ["New", "Yesterday", "This Week", "This Month"],
    page: 1,
    selected: "",
    showDotsToggle: false,
    filters: ["Time"],
    overlay: false,
    zIndex: 0,
    components: {
      Bar,
      ReceivedList,
      TheLayoutToTopFab,
      Ellipsis,
      NotificationDetails,
      NoContent,
    },
    resources: [],
    panel: [0, 1],
    disabled: false,
    readonly: false,
  }),
  computed: {
    notifications() {
      return this.$store.getters.getNotificationBySenderId;
    },

    filteredNotifications() {
      if (this.searchQuery) {
        return this.notifications.filter((item) => {
          return item.notification_subject
            .toLowerCase()
            .startsWith(this.searchQuery);
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
    this.getNotificationBySenderId();
  },
  methods: {
    moment: function () {
      return moment();
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
      "getNotificationBySenderId",
    ]),
    notificationContent(notificationDetails) {
      this.$store.dispatch("getNotificationDetails", notificationDetails);
    },
    toggleDots(notificationDetails) {
      this.showDotsToggle = !this.showDotsToggle;
      console.log(
        "here is the id>>>>>>>>>>>>>>>>>>>>>>>>> ",
        notificationDetails
      );
      this.$store.dispatch("getNotificationDetails", notificationDetails);
      return (this.selected = notificationDetails);
    },
    toggleBell() {
      this.showBell = !this.showBell;
      this.messages = 0;
    },
    // this method to check web history
    hasHistory() {
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
.margin {
  margin-top: 8%;
}
</style>
