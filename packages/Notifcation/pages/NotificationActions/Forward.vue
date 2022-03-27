<template>
  <div class="margin">
    <div>
      <v-app>
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <divider></divider>

          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-list-item-avatar>
            <v-card-title>
              {{ singleNotification.notification_subject }}
            </v-card-title>
          </v-list-item>
          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>

            <div>
              {{ singleNotification.notification_description }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item
            v-if="item.action"
            :key="item.title"
          >
            <v-list-item-action>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="inset"
          ></v-divider>
        </template>
      </v-list>
          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  name:"Forward",
      data: () => ({
      inset: true,
      items: [
        {
          action: 'mdi-label',
          title: 'List item 1',
        },
        {
          divider: true,
        },
        {
          action: 'mdi-label',
          title: 'List item 2',
        },
        {
          divider: true,
        },
        {
          action: 'mdi-label',
          title: 'List item 3',
        },
      ],
    }),

  computed: {
    singleNotification() {
      return this.$store.state.selectedNotification;
    },
  },
};
</script>

<style lang="scss" scoped>
.margin {
  margin-top: 20%;
}
</style>
