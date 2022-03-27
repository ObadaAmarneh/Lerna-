<template>
  <div>
    
          <!-- <AppNotification></AppNotification> -->
  </div>
</template>
<script>
// Importing Component

import VueBell from "../components/vuebell.vue";
import { mapActions } from "vuex";
import AppNotification from "./AppNotification.vue"
export default {
  name: "Bell",
  components: {
    VueBell,
    AppNotification
  },

  data: () => ({
    messages: 0,
    showBell: false,
    benched: 0,
  }),
  computed: {
    length() {
      return 20;
    },
    notifications() {
      return this.$store.getters.getAllNotifications;
    },
    items() {
      console.log("this is the items", this.notifications);
      let idF = this.notifications;
      let items = idF.map((element) => {
        return element;
      });
      return items;
    },
  },
  created() {
    this.getNotifications();
  },
  methods: {
    ...mapActions(["getNotifications"]),
    dotsToggle() {
      console.log("hola");
    },
    toggleBell() {
      console.log("toogled");
      this.showBell = !this.showBell;
      this.messages = 0;
    },
  },
  // ...
  components: {
    // Registering Component
  },

  // ...
};
</script>
<style scoped>
v-application .red {
  background-color: orange !important;
  border-color: #f44336 !important;
}
.v-list-item__title {
  margin-left: 2% !important;
}

.bell {

}
.overlay{
margin-top: 200px;
background-color: red !important;

}
.btn__content{
  background-color:red;
}
.css-qpmazy {
  font-size: 14px;
  color: rgb(107, 119, 140);
  font-weight: 600;
  text-transform: uppercase;
}

</style>
