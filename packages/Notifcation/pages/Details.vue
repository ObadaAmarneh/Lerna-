<template>
  <div>
    <v-app>
      <v-main>
        <v-container class="py-8 px-6" fluid>
          <div class="margin">
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
            </v-app-bar>

            <v-card v-if="singleNotification.length != 0">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-chip
                  color="teal lighten-4"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  new
                </v-chip>
              </v-card-actions>
              <!-- <v-btn icon>
              <v-icon>mdi-reply</v-icon>
            </v-btn> -->

              <v-list-item>
                <v-list-item-action>
                  <v-card flat>
                    <v-container fluid>
                      <v-row class="child-flex">
                        <div>
                          <v-toolbar shaped dense>
                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  v-bind="attrs"
                                  v-on="on"
                                  icon
                                  class="hidden-xs-only"
                                >
                                  <v-icon
                                  color="error"
                                    @click="
                                      deleteNotification(singleNotification.id);
                                      hasHistory()
                                        ? $router.go(-1)
                                        : $router.push('/');
                                    "
                                    >mdi-delete</v-icon
                                  >
                                </v-btn>
                              </template>
                              <span>Delete </span>
                            </v-tooltip>
                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="warning"
                                  v-bind="attrs"
                                  v-on="on"
                                  icon
                                  class="hidden-xs-only"
                                >
                                  <v-icon>mdi-email</v-icon>
                                </v-btn>
                              </template>
                              <span> Mark as unread</span>
                            </v-tooltip>
                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  v-bind="attrs"
                                  v-on="on"
                                  icon
                                  color="info"
                                  class="hidden-xs-only"
                                  to="NotificationActions/Forward"
                                >
                                  <v-icon>mdi-forward</v-icon>
                                </v-btn>
                              </template>

                              <span> Forward </span>
                            </v-tooltip>

                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="success"
                                  icon
                                  v-bind="attrs"
                                  v-on="on"
                                  class="hidden-xs-only"
                                  to="/NotificationActions/Reply"
                                >
                                  <v-icon>mdi-reply</v-icon>
                                </v-btn>
                              </template>
                              <span>Reply </span>
                            </v-tooltip>

                            <v-spacer></v-spacer>
                          </v-toolbar>
                        </div>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-list-item-action>
              </v-list-item>

              <v-card-title> </v-card-title>
              <v-card-actions>
                <span class="text-h5">Notification Details</span>
                <v-spacer></v-spacer>
                <h6 class="ml-20"></h6>
                <h6>{{ notificationDate }}</h6>
              </v-card-actions>

              <v-card-text>
                <v-container>
                  <v-list three-line>
                    <template>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title
                            class="font-weight-bold"
                            v-html="singleNotification.notification_subject"
                          ></v-list-item-title>

                          <v-spacer> </v-spacer>
                          <v-textarea
                            v-model="
                              singleNotification.notification_description
                            "
                            label="Message"
                            class="font-weight-light"
                            maxlength="255"
                            readonly
                            full-width
                            single-line
                            dense
                          ></v-textarea>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-list>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <h6>Sent by:</h6>

                <div class="text-center">
                  <v-chip>
                    <v-avatar class="teal"> U </v-avatar>
                    User1
                  </v-chip>
                </div>

                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </div>
          <div v-if="singleNotification.length === 0">
            <NoContent></NoContent>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";
import NoContent from "../components/NoContent.vue";

export default {
  compontents: {
    NoContent,
  },
  methods: {
    ...mapActions(["deleteNotification"]),

    hasHistory() {
      return window.history.length > 2;
    },
  },
  mounted() {
    console.log(
      "here???????????????????",
      this.$store.state.selectedNotification
    );
  },
  computed: {
    singleNotification() {
      return this.$store.state.selectedNotification;
    },
    notificationDate() {
      return moment(this.singleNotification.createdAt).fromNow();
    },
  },
};
</script>

<style lang="scss" scoped>
.margin {
  margin-top: 10%;
}
</style>
