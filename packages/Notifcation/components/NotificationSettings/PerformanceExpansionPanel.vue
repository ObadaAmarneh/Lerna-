<template>
  <div>
    <v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" class="ma-2 white--text" @click="resetSittings">
          Reset
          <v-icon right dark> mdi-lock-reset </v-icon>
        </v-btn>
      </v-card-actions>

      <v-list tow-line>
        <v-list-item class="mb-14" v-for="(item, n) in settingsTitle" :key="n">
          <v-list-item-content>
            {{ item.title }}
   
          </v-list-item-content>
          <v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-subtitle v-if="n == 0">
              Notify me when:
            </v-list-item-subtitle>

            <v-switch
              class="ml-3"
              color="info"
              v-model="item.active"
              hide-details
              :checked="item.active"
              @click="performanceSettings(item, n)"
              inset
            >
              <template #prepend>
                <v-list-item-subtitle class="small" v-if="item.active"
                  >On</v-list-item-subtitle
                >
                <v-list-item-subtitle class="small" v-if="!item.active"
                  >Off</v-list-item-subtitle
                >
              </template>
            </v-switch>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-subtitle class="ml-8" v-if="n == 0">
              Remind me if unseen after 1H
            </v-list-item-subtitle>
            <v-checkbox
              class="ml-10"
              v-model="item.reminderAfterOneHour"
              :checked="item.reminderAfterOneHour"
              color="info"
              hide-details
              @click="performanceSettings(item, n)"
            ></v-checkbox>
          </v-list-item-content>
          <v-list-item-content class="mt-5">
            <v-spacer></v-spacer>
            <v-list-item-subtitle v-if="n == 0">
              Move to other
            </v-list-item-subtitle>
            <v-list-item-icon class="ml-2" @click.stop="moveToOther(item)">
              <v-icon large color="info">mdi-arrow-right-bold-circle</v-icon>
            </v-list-item-icon>
          </v-list-item-content>
        </v-list-item>
        <!-- ssss -->
      </v-list>
    </v-card>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "TasksExpansionPanel",
  data: () => ({
    performanceSettingsValues: [],
    movedSettings: [],

    settingsTitle: [
      {
        title: "Utilization for each service, service provider, facility become lower: ",
        active: false,
        reminderAfterOneHour: false,
      },
      {
        title: "Any review under required:",
        active: false,
        reminderAfterOneHour: false,
      },
      {
        title: "Scalable business model become lower for clinic:",
        active: false,
        reminderAfterOneHour: false,
      },
      {
        title: "Marketing strategy working flow result:",
        active: false,
        reminderAfterOneHour: false,
      },
    ],
  }),
  methods: {
    resetSittings() {
      this.settingsTitle.forEach((item) => {
        item.active = false;
        item.reminderAfterOneHour = false;
      });
    },
    performanceSettings(item, id) {
      console.log("active here", item.active);
      console.log("reminder here", item.reminderAfterOneHour);
      if (!this.performanceSettingsValues.includes(item)) {
        this.performanceSettingsValues.push(item);
      }
      if (item.reminderAfterOneHour) {
        this.performanceSettingsValues[id].reminderAfterOneHour =
          item.reminderAfterOneHour;
      }
      // here create the request
      console.log("this is the array", this.performanceSettingsValues);
      console.log("this is the  ID", id);
    },
    moveToOther(movedItem) {
      this.settingsTitle.forEach((item, i) => {
        if (item.title == movedItem.title) {
          console.log("this is the id of the moved obj", i);
          this.settingsTitle.splice(i, 1);
          Swal.fire({
            position: "centered",
            icon: "success",
            title: ` ${movedItem.title} has been moved to other notification`,
            showConfirmButton: false,
            timer: 1500,
          });
          this.movedSettings = [];
          this.movedSettings.push(item);
        }
      });
      this.$store.commit("storeMovedSettings", this.movedSettings);
    },
  },
  components: {},
};
</script>

<style  scoped>
.v-input
  .ml-3
  .v-input--hide-details
  .v-input--is-label-active
  .v-input--is-dirty
  .theme--light
  .v-input--selection-controls
  .v-input--switch
  .v-input--switch--inset
  .info--text:after {
  content: "No";
  color: #333333;
  font-size: 10px;
}

.v-input.v-input--switch--inset.v-input--is-label-active.v-input--is-dirty
  .v-input--switch__track:after {
  content: "Yes";
  color: #28a745;
}
</style>