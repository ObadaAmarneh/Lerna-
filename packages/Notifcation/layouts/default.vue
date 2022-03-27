<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-main>
        <Nuxt />

        <v-app-bar
          height="15%"
          absolute
          dense
          fixed
          shrink-on-scroll
          prominent
          fade-img-on-scroll
          scroll-threshold="500"
          scroll-target="#scrolling-techniques"
        >
          <v-toolbar-title>Notification Management <v-icon>mdi-bell-outline</v-icon></v-toolbar-title>

          <v-spacer></v-spacer>

          <v-menu bottom left>
            <v-list>
              <v-list-item v-for="(item, i) in links" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <template v-slot:extension>
            <v-tabs align-with-title>
              <div v-for="[name, link, icon , color] in links" :key="name">
                <v-tab class="inline" :to="link"
                  >{{ name }}
                  <v-icon class="inline" style="display: inline-block" :color="color">
                    {{ icon }}
                  </v-icon></v-tab
                >
              </div>
            </v-tabs>
          </template>
        </v-app-bar>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
import AppNotification from "../components/AppNotification";
import Navbar from "../components/Navbar.vue";
import Bar from "../components/Bar.vue";
const { io } = require("socket.io-client");
import {mapActions } from 'vuex';
import Form from "../components/Form.vue";

export default {

  data: () => ({
    links: [
      ["Settings", "/notificationSettings", "mdi-cog" ,"#8A2BE2"],
      ["Received", "/Received", "mdi-email-outline","success"],
      ["Sent", "/Sent", "mdi-fast-forward" ,"primary"],
      ["Trash", "/Trash", "mdi-delete","error"],
    ],
  }),
  components: {
    AppNotification,
    Navbar,
    Bar,
    Form,
  },
  methods:{
    ...mapActions(["deleteNotification" , "setFlag","setSingleNotification"]),

  },
    mounted() {
    // console.log("received");
    // const socket = io.connect("http://localhost:30192/", {
    //   cors: {
    //     origin: "*",
    //   },
    // });
    // socket.on('connection', (connection) => {
    //   console.log('connected', connection);
    // })
    // socket.emit("createNotification", "pushed message");
    // socket.on("createNotification", (AllNotifications) => {
    //   console.log('createNotification socket', AllNotifications);
    //   this.setNotification(AllNotifications);
    // });
    // console.log("Socket ON");
    //UserName here
    // socket.emit("userConnected", { username: "Agents On Cloud" });
    // socket.on("addNotification", (notification) => {
    //   console.log("single notification found", notification);
    //   console.log("commit");
    //   this.$store.commit("setNotificationCounter");

    //   this.setSingleNotification(notification);
    // });
  },

};
</script>
<style scoped>
.v-toolbar__content {
  height: 20px;
}
.Bell {
  margin-right: 2%;
}
.v-btn--fab.v-size--default {
  height: 50px;
  width: 56px;
}

.inline {
  display: inline-block;
}
.plus-icon{
  margin-top:6px;
}
</style>
