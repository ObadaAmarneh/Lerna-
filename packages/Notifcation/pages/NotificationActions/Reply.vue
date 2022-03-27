<template>
  <div class="margin">
    
    <v-container class="container--fluid" fluid>
      <v-app-bar
        width="100%"
        outlined
        color="white"
        class="overflow-hidden mb-3"
      >
        <!-- fir the filter -->

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
              @click="$router.push('/Received')"
              class="my-5 btn btn-outline-success"
              >&laquo; Back> mdi-arrow-left</v-icon
            >
          </template>
          <span>Back </span>
        </v-tooltip>
      </v-app-bar>
      <v-app>
        <v-form ref="form" v-model="valid" lazy-validation width="20%">
          <v-card-text>
            <v-list three-line>
              <template>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-chip label color="pink" text-color="white">
                    <v-icon left> mdi-reply </v-icon>Reply
                  </v-chip>
                </v-card-actions>
                <v-card-actions>
                  <span class="text-h5">Reply</span>
                  <v-spacer></v-spacer>
                  <small>Date: {{ singleNotification.createdAt }}</small>
                </v-card-actions>
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
                      counter
                      label="Reply"
                      :rules="rules"
                      :value="value"
                      v-model="value"
                      placeholder="Type your message here"
                    ></v-textarea>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <h6 class="ml-20">Sent by:</h6>
            <div class="text-center">
              <v-chip>
                <v-avatar class="teal"> U </v-avatar>
                User1
              </v-chip>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="error" outlined @click="value = ' '"> Clear </v-btn>
            <v-btn color="success" outlined @click="submit"> Send </v-btn>
          </v-card-actions>
          <v-snackbar v-if="showAlert" v-model="snackbar">
            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-form>
      </v-app>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [(v) => v.length <= 255 || "Max 255 characters"],
    value: "",
    showAlert: false,
  }),
  methods: {},
  computed: {
    singleNotification() {
      return this.$store.state.selectedNotification;
    },
    hasHistory() {
      return window.history.length > 2;
    },
  },
};
</script>

<style lang="scss" scoped>
.margin {
  margin-top: 20%;
}

</style>
