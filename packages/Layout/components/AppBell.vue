<template>
  <v-menu
    offset-y
    origin="center center"
    :nudge-bottom="14"
    transition="scale-transition"
    class="mt-12"
    z-index="10"
  >
    <template v-slot:activator="{ on }">
      <v-btn icon text v-on="on" @click="restCounter">
        <v-badge
          :content="getNotificationCount"
          :value="getNotificationCount"
          color="red"
          overlap
        >
          <v-icon v-if="!getNotificationCount">mdi-bell</v-icon>
          <v-icon v-if="getNotificationCount">mdi-bell-ring</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-list class="pa-0" two-line subheader>
      <v-list-item>
        <v-subheader>Notifications</v-subheader>
        <v-spacer></v-spacer>
        <v-list-item-action>
          <Form></Form>
        </v-list-item-action>
          <v-icon class="cursor mr-2"  to="/notificationSettings" color="grey lighten-1"> mdi-wechat </v-icon>
          <v-icon class="cursor"  to="/notificationSettings" color="grey lighten-1"> mdi-login-variant </v-icon>
      </v-list-item>
      <v-spacer></v-spacer>
      <v-divider />
      <!--<v-divider inset/>-->
      <!--<v-subheader inset>Files</v-subheader>-->
              <v-btn @click="display">click</v-btn>
      <v-virtual-scroll :items="notifications" height="500" item-height="100">
        <template v-slot:default="{ item }" >
          <v-list>
            <v-list-item-group >
              <v-list-item  height= "100" :key="item" avatar @click="1" min="0" max="4" class="unread">
  
                <v-list-item-avatar class="mr-4">
                  <!-- [item.iconClass] -->
                  <v-avatar  dense>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"

                    />
                  </v-avatar>
                </v-list-item-avatar>
     
                <v-list-item-content
                  @click.prevent.stop="notificationContent(item)"
                >

                  <h1 default class="caption">
                    {{ limiter(item.notification_subject) }}
                    
                   
                  </h1>
                  
                   <span class="spanDate">{{
                      notificationDate(item.createdAt)
                    }}</span>
                  <v-list-item-subtitle>
        
                    {{ item.notification_description }}
                    ...</v-list-item-subtitle
                  >
                </v-list-item-content>
                            <v-list-item-action>
     <v-icon small :color="item.is_unread  ? 'info' : 'grey lighten-1'">
     mdi-image-filter-tilt-shift        
     </v-icon>
   </v-list-item-action>
                <v-list-item-action>
                  <v-menu transition="slide-y-transition" bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        @click.prevent.stop="toggleDots(item)"
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
              <v-divider></v-divider>
            </v-list-item-group>
          </v-list>
        </template>
      </v-virtual-scroll>
      <v-btn color="info" class="showAll" text>
        <NuxtLink style="text-decoration: none; color: inherit" to="/Received"
          >Show All</NuxtLink
        >
      </v-btn>
    </v-list>
    <v-divider />

    <div v-if="getDialog">
      <NotificationDetails></NotificationDetails>
    </div>
  </v-menu>
</template>

<script>
import { mapActions } from "vuex";
import Ellipsis from "./Ellipsis.vue";
import Form from "./Form.vue";
import NotificationDetails from "./NotificationDetails.vue";
import moment from "moment";

export default {
  name: "AppNotification",
  data: () => ({
    selected: "",
    showBell: false,
    messages: null,
  }),
  beforeMount() {
    // this.socket();
  },
  computed: {
    // we can use here map getter and use the value form the store directly so we dont need to use each time this.store.getters  

    showForm() {
      this.setFormFlag();
    },
    length() {
      return 20;
    },
    notifications() {
      return this.$store.getters.getAllNotifications;
    },
    getDialog() {
      return this.$store.getters.getDialog;
    },
    getNotificationCount() {
      return this.$store.getters.getNumberOfNotification;
    },
  },
  components: {
    Ellipsis,
    Form,
    NotificationDetails,
  },
  created() {
    this.getNotifications();
  },

  methods: {
    ...mapActions(["getNotifications", "setFormFlag"]),
   display(){
console.log('All the notification have been',this.notifications);
   },
    limiter(notificationSubject) {
      if (notificationSubject.length > 20) {
        return (notificationSubject = notificationSubject.substring(0, 34));
      } else {
        return notificationSubject;
      }
    },
    restCounter() {
      console.log('force update');
      this.$forceUpdate();
      this.$store.commit("updateNotificationCounter");
      this.getNotificationCount;
    },
    notificationDate(date) {
      return moment(date).fromNow();
    },
    toggleBell() {
      console.log("toogled");
      this.showBell = !this.showBell;
      this.messages = 0;
    },
    notificationContent(notificationDetails) {
      
      console.log('clicking the notifcation here is the notifcaiton deatils ',notificationDetails );
      //TODO we need to make a request to the backend to change the is_unread status of
      //TODO we need to the value from the backend and do a if rendering condition in order to render the unread notification for the second time   
      console.log('notifcation id ', notificationDetails.id);
      this.$store.dispatch("changeNotificationStatus" , notificationDetails.id)
      this.$store.dispatch("getNotificationDetails", notificationDetails);
      this.$router.push({ path: "Details" });
    },
    toggleDots(notificationDetails) {
      console.log(
        "here is the id>>>>>>>>>>>>>>>>>>>>>>>>> ",
        notificationDetails
      );
      this.$store.dispatch("getNotificationDetails", notificationDetails);
      return (this.selected = notificationDetails);
    },
  },
};
</script>
<style scoped>
.unread{

  
}
.cursor{
  cursor: pointer;
}
.menuable__content__active {
  width: 400px;
}
.v-menu__content theme--light {
  z-index: 10;
  transform-origin: center center;
}
.subheader {
  z-index: 9999;
}
.v-subheader {
  background: transparent;

  font-weight: 500;
  font-size: 20px;
  /* fallback for old browsers */
  color: #181818;
}
.v-btn--fab.v-size--small {
  height: 29px !important;
  width: 29px !important;
}
.spanDate {
  color: grey;
  opacity: 0.5;
  font-size: 13px !important;
}
.notification-subject {
  font-size: 13px !important;
}

.showAll {
  margin-left: 9rem;
}
</style>
