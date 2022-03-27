<template>
  <no-ssr>

  <div>
    <v-app>
      <v-main>
            <v-container class="py-8 px-6" fluid>

                <Navbar/>
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
              <v-autocomplete
                :items="settings"
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
            <v-col class="mt-6" cols="12" md="3" sm="7">
              <v-autocomplete
                :items="SettingsMenu"
                dense
                small-chips
                v-model="SettingsMenuQuery"
                label="settings"
                solo
                clearable
                class="expanding-search"
                prepend-inner-icon="mdi-cog"
              ></v-autocomplete>
            </v-col>
            <v-spacer></v-spacer>
            <v-btn class="mr-5" icon v-if="!expand" @click="all(expand)">
              Expand<v-icon>mdi-swap-vertical</v-icon>
            </v-btn>
            <v-btn class="mr-5" icon v-if="expand" @click="all(expand)">
              Expanded<v-icon>mdi-swap-vertical</v-icon>
            </v-btn>
          </v-app-bar>
                          <h1>here is the create</h1>
                          <Create></Create>
          <v-expansion-panels v-model="panel" multiple v-if="SettingsMenuQuery === 'Other notifications'" >
            <v-expansion-panel v-for="(item, i) in filteredSettingsMenu" :key="i" >
              <v-expansion-panel-header >
                <template v-slot:actions>
                  <v-icon color="primary"> $expand </v-icon>
                </template>
               <v-expansion-panel-header>{{ item }} </v-expansion-panel-header>  
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <NotificationExpansionPanel
                  v-if="item === 'Notifications settings'"
                />
                <AppointmentsExpansionPanel v-if="item === 'Appointment notifications'"/>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>


             <v-expansion-panels v-model="panel" multiple  >
            <v-expansion-panel v-for="(item, i) in filteredSettings" :key="i">
              <v-expansion-panel-header>
                <template v-slot:actions>
                  <v-icon color="primary"> $expand </v-icon>
                </template>
                <h3>{{ item }}</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>

                <NotificationExpansionPanel
                  v-if="item === 'Notifications settings'"
                />
                <AppointmentsExpansionPanel v-if="item === 'Appointment notifications'"/>
                <TasksExpansionPanel v-if="item === 'Tasks notifications'"/>
                <IncidentExpansionPanel v-if="item === 'Incident notifications'"/>
                <ServiceProviderExpansionPanel v-if="item === 'Service provider notifications'"/>
                <PerformanceExpansionPanel v-if="item === 'Performance notifications'"/>
                <BillingExpansionPanel v-if="item === 'Billing notifications'"/>
                <FacilityExpansionPanel v-if="item === 'Facility notification'"/>
                <Reminders v-if="item === 'Meeting and reminders'"/>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog
          </v-btn>
        </template>
            </v-container>
      </v-main>
      <TheLayoutToTopFab></TheLayoutToTopFab>
      <SettingsAlert />
    </v-app>
  </div>
  </no-ssr>
</template>

<script>
import Create from '../../Feature3/components/Create.vue';
import Navbar from '../components/Navbar.vue'
import TheLayoutToTopFab from "../components/TheLayoutToTopFab.vue";
import CreateSettings from "../components/NotificationSettings/CreateNotificationSettings.vue";
import SettingsAlert from "../components/NotificationAlert/SettingsAlert.vue";
import NotificationExpansionPanel from "../components/NotificationSettings/NotificationsExpansionPanel";
import AppointmentsExpansionPanel from "../components/NotificationSettings/AppointmentsExpansionPanel.vue";
import SchedularNotifications from "../components/NotificationSettings/SchedularNotifications.vue";
import TasksExpansionPanel from "../components/NotificationSettings/TasksExpansionPanel.vue";
import IncidentExpansionPanel from "../components/NotificationSettings/IncidentExpansionPanel.vue";
import ServiceProviderExpansionPanel from "../components/NotificationSettings/ServiceProviderExpansionPanel.vue";
import PerformanceExpansionPanel from "../components/NotificationSettings/PerformanceExpansionPanel.vue";
import BillingExpansionPanel from "../components/NotificationSettings/BillingExpansionPanel";
import FacilityExpansionPanel from "../components/NotificationSettings/FacilityExpansionPanel";
import Reminders from "../components/NotificationSettings/Reminders";
export default {
          layout: 'dashboard',
  components: {
    Create,
    TheLayoutToTopFab,
    CreateSettings,
    SchedularNotifications,
    SettingsAlert,
    NotificationExpansionPanel,
    AppointmentsExpansionPanel,
    TasksExpansionPanel,
    IncidentExpansionPanel,
    ServiceProviderExpansionPanel,
    PerformanceExpansionPanel,
    BillingExpansionPanel,
    FacilityExpansionPanel,
    Reminders,
    Navbar
  },
  data() {
    
    return {
      panel: [],
      settings: [
        "Notifications settings",
        "Appointment notifications",
        "Tasks notifications",
        "Incident notifications",
        "Service provider notifications",
        "Performance notifications",
        "Billing notifications",
        "Facility notification",
        // "Service notifications",
        "Meeting and reminders",
        // "Knowledge  notifications",
        // "Marketing notifications",
      ],
      SettingsMenu:[
        'Other notifications'
      ],

      expand: false,
      SettingsMenuQuery:'',
      searchQuery: "",
    };
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      if (this.expand) {
        console.log("here is the sxpand", this.expand);
        this.panel = [];
        this.expand = !this.expand;
      } else {
        console.log("here is the elese", this.expand);

        this.panel = this.settings.map((k, i) => i);
        this.expand = !this.expand;
      }
    },
    // Reset the panel
    hasHistory() {
      return window.history.length > 2;
    },
  },

  computed: {
    test() {
      return this.$store.getters.myGetter;
    },
    filteredSettings() {
      if (this.searchQuery) {
        return this.settings.filter((item) => {
          return item.startsWith(this.searchQuery);
          // console.log("hoon item",item.startsWith(this.searchQuery));
        });
      } else {
        return this.settings;
      }
    },
    filteredSettingsMenu(){
          if (this.SettingsMenuQuery) {
        return this.SettingsMenu.filter((item) => {
          return item.startsWith(this.SettingsMenuQuery);
          // console.log("hoon item",item.startsWith(this.searchQuery));
        });
      } else {
        return this.SettingsMenu;
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
