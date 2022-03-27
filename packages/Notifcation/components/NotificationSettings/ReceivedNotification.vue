<template>
  <div>
    <v-card tile>
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
            Play a sound when receive a new notification:
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-action-text v-if="PlaySound"
              >On <v-icon>mdi-volume-high</v-icon>
            </v-list-item-action-text>
            <v-list-item-action-text v-if="!PlaySound"
              >Off <v-icon>mdi-volume-off</v-icon>
            </v-list-item-action-text>
            <v-switch
              class="ml-3"
              v-model="PlaySound"
              color="info"
              value="info"
              hide-details
              inset
            ></v-switch>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            display a small pop-up notification when receive a new notification:
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-action-text v-if="smallPopUp"
              >On
            </v-list-item-action-text>
                  <v-list-item-action-text v-if="!smallPopUp"
              >Off
            </v-list-item-action-text>
            <v-switch
              class="ml-3"
              v-model="smallPopUp"
              color="info"
              value="info"
              hide-details
              inset

            ></v-switch>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            highlight indicator when notification updated or deleted:
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-action-text v-if="highlightIndicator"
              >On
             
            </v-list-item-action-text>
             <v-list-item-action-text v-if="!highlightIndicator"
              >Off
            </v-list-item-action-text>
            <v-switch
              inset

              class="ml-3"
              v-model="highlightIndicator"
              color="info"
              value="info"
              hide-details
            ></v-switch>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ReceivedNotification",
  data: () => ({
    PlaySound: false,
    highlightIndicator: false,
    smallPopUp: false,
  }),
};
</script>

<style lang="scss" scoped>
</style>