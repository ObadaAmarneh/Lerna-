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
        <v-list-item>
          <v-list-item-content>
            While creating a schedule notification frequency:
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-action-text
              >Select your default
            </v-list-item-action-text>
            <v-radio-group
              append-icon="mdi-lock"
              v-model="selectedFrequency"
              row
            >
              <template v-slot:label> </template>
              <v-radio on-icon="mdi-check" label="Daily" value="Daily">
                <template v-slot:label>
                  <strong class="success--text">Daily</strong>
                </template>
              </v-radio>
              <v-radio on-icon="mdi-check" label="Weekly" value="Weekly">
                <template v-slot:label>
                  <strong class="success--text">Weekly</strong>
                </template>
              </v-radio>
              <v-radio on-icon="mdi-check" label="Monthly" value="Monthly">
                <template v-slot:label>
                  <strong class="success--text">Monthly</strong>
                </template>
              </v-radio>
              <v-radio on-icon="mdi-check" label="Yearly" value="Yearly">
                <template v-slot:label>
                  <strong class="success--text">Yearly</strong>
                </template>
              </v-radio>
              <v-radio on-icon="mdi-check" label="Specific" value="Specific">
                <template v-slot:label>
                  <strong class="success--text">Specific</strong>
                </template>
              </v-radio>
            </v-radio-group>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content> Days in weekly frequency: </v-list-item-content>
          <v-list-item-content>
            <v-list-item-action-text
              >Select your default
            </v-list-item-action-text>
            <v-radio-group v-model="selectedDay" row>
              <template v-slot:label> </template>
              <v-radio
                on-icon="mdi-check"
                label="Sun"
                value="Sun"
                append-inner-icon="mdi-cog"
              >
                <template v-slot:label>
                  <strong class="success--text"
                    ><v-icon>mdi-numeric-1-box-outline</v-icon> Sun</strong
                  >
                </template>
              </v-radio>
              <v-radio on-icon="mdi-check" label="Mon" value="Mon">
                <template v-slot:label>
                  <strong class="success--text"
                    ><v-icon>mdi-numeric-2-box-outline</v-icon> Mon</strong
                  >
                </template>
              </v-radio>
              <v-radio on-icon="mdi-check" label="Tue" value="Tue">
                <template v-slot:label>
                  <strong class="success--text"
                    ><v-icon>mdi-numeric-3-box-outline</v-icon>Tue</strong
                  >
                </template>
              </v-radio>
              <v-radio on-icon="mdi-check" label="Wed" value="wed">
                <template v-slot:label>
                  <strong class="success--text"
                    ><v-icon>mdi-numeric-3-box-outline</v-icon>Wed</strong
                  >
                </template>
              </v-radio>
              <v-radio on-icon="mdi-check" label="Thu" value="Thu">
                <template v-slot:label>
                  <strong class="success--text"
                    ><v-icon>mdi-numeric-3-box-outline</v-icon>Thu</strong
                  >
                </template>
              </v-radio>
              <v-radio on-icon="mdi-check" label="Fri" value="Fri">
                <template v-slot:label>
                  <strong class="success--text"
                    ><v-icon>mdi-numeric-3-box-outline</v-icon>Fri</strong
                  >
                </template>
              </v-radio>
              <v-radio on-icon="mdi-check" label="Sat" value="Sat">
                <template v-slot:label>
                  <strong class="success--text"
                    ><v-icon>mdi-numeric-3-box-outline</v-icon>Sat</strong
                  >
                </template>
              </v-radio>
            </v-radio-group>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content> Monthly frequency: </v-list-item-content>
          <v-list-item-content>
            <v-list-item-action-text
              >Select your default
            </v-list-item-action-text>
            <v-autocomplete
              :items="settings"
              dense
              small-chips
              v-model="searchQuery"
              label="Search"
              solo
              clearable
              class="expanding-search shrink"
              prepend-inner-icon="mdi-magnify"
            ></v-autocomplete>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import SettingsAlert from "../NotificationAlert/SettingsAlert.vue";
export default {
  name: "SchedularNotifications",
  data: () => ({
    notificationTitle: "",
    selectedDay: "",
    selectedFrequency: "",
  }),
  methods: {
    AddTittle() {},
    resetSittings() {},
  },
  components: {
    SettingsAlert,
  },
  updated() {
    this.$store.commit("showSettingsAlert");
  },
};
</script>

<style lang="scss" scoped>
</style>