<template>
  <div>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        @click="notificationActions(item.title, singleNotification.id)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-icon dense class="ml-2" color="info">{{ item.icon }}</v-icon>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  props: {
    selected: { type: Object },
  },

  name: "TrashEllipsis",
  data: () => ({
    items: [{ title: "Undo", icon: "mdi-undo-variant" }],
  }),
  methods: {
    ...mapActions(["deleteNotification", "setFlag"]),
    notificationActions(selectedAction, id) {
      if (selectedAction == "Undo") {
        console.log("this is the notifcation id", id);
        axios
          .put(`http://localhost:3500/notifications/undo/${id}`)
          .then((results) => {
            Swal.fire({
              position: "centered",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            Swal.fire({
              position: "centered",
              icon: "error",
              title: "There is an error while you are trying to undo ",
              showConfirmButton: false,

              timer: 3000,
            });
          });
      }
    },
  },
  computed: {
    singleNotification() {
      return this.$store.state.selectedNotification;
    },
  },
};
</script>

<style lang="scss" scoped>
.dots-position {
  margin-left: 42%;
}
</style>
