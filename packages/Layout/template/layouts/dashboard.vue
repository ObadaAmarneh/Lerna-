<template>
  <div id="appRoot">
    <template>
      <v-app id="inspire" class="app">
        <app-drawer class="app--drawer"></app-drawer>
        <TasksDrawer class="app--drawer"></TasksDrawer>
        <app-toolbar class="app--toolbar"></app-toolbar>
        <v-main>
          <!-- Page Header -->
          <page-header></page-header>

          <div class="page-wrapper">
            <nuxt />
          </div>

          <!-- App Footer -->
          <v-footer height="auto" class="white pa-3 app--footer">
            <img
              class="ml-2"
              width="40"
              height="40"
              src="../assets/Img/94598985.jpg"
            />
            <span class="caption"
              >Agents On Cloud &copy; {{ new Date().getFullYear() }}</span
            >

            <v-spacer></v-spacer>
          </v-footer>
          <TheLayoutToTopFab></TheLayoutToTopFab>
        </v-main>
        <!-- Go to top -->

        <!-- theme setting -->

        <v-navigation-drawer
          class="setting-drawer"
          temporary
          right
          v-model="rightDrawer"
          hide-overlay
          fixed
        >
          <theme-settings></theme-settings>
        </v-navigation-drawer>
      </v-app>
    </template>

    <v-snackbar
      :timeout="3000"
      bottom
      right
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <v-btn dark text @click.native="snackbar.show = false" icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import TheLayoutToTopFab from "../components/TheLayoutToTopFab.vue";
import AppDrawer from "../components/AppDrawer.vue";
import TasksDrawer from "../components/TasksDrawer";
import AppToolbar from "../components/AppToolbar";
import AppFab from "../components/AppFab";
import PageHeader from "../components/PageHeader";
import { mapActions } from "vuex";
import ThemeSettings from "../components/ThemeSettings";
const { io } = require("socket.io-client");
export default {
  components: {
    TheLayoutToTopFab,
    AppDrawer,
    AppToolbar,
    AppFab,
    PageHeader,
    ThemeSettings,
    TasksDrawer,
  },
  data: () => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: "",
      color: "",
    },
  }),

  methods: {
    ...mapActions(["setSingleNotification"]),
    openThemeSettings() {
      this.$vuetify.goTo(0);
      this.rightDrawer = !this.rightDrawer;
    },
  },
  mounted() {
    console.log("Socket On");
    const socket = io.connect("https://api.notifications.agentsoncloud.com/", {
      cors: {
        origin: "*",
      },
      transports: ["websocket"],
    });
    // // socket.on('connection', (connection) => {
    // //   console.log('connected', connection);
    // // })
    // // socket.emit("createNotification", "pushed message");
    // // socket.on("createNotification", (AllNotifications) => {
    // //   console.log('createNotification socket', AllNotifications);
    // //   this.setNotification(AllNotifications);
    // // });
    console.log("Socket ON");
    // //UserName here
    socket.emit("userConnected", { username: "Agents On Cloud" });
    socket.on("addNotification", (notification) => {
      this.$store.commit("setNotificationCounter");
      this.setSingleNotification(notification);
    });
  },
};
</script>

<style lang="scss" scoped>
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}
.page-wrapper {
  height: 100% !important;
  margin-bottom: 50px;
}
.app--footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
