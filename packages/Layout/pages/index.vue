<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg4 sm7 xs12>
          <mini-statistic
            title="Registered Patient"
            sub-title="Today:"
            sub="Yesterday:"
            text = "Total Patient: 5743"

          >
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm7 xs12>
          <mini-statistic
            title="Total Doctors"
            sub-title="Medical Officers:"
            sub="Anaesthetists:"
            text = "Consultants : 45"

          >
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm7 xs12>
          <mini-statistic
            title="Today's Appointments"
            sub-title="Cancelled:"
            sub="Returned:"
            text = "New : 1 Follow up : 0 Referrals : 0"
          >
          </mini-statistic>
        </v-flex>
     <v-flex  class="d-flex align-end flex-column">
          <linear-statistic
            title="Sales"
            sub-title="Sales increase"
            icon="trending_up"
            color="success"
            :value="15"
          >
          </linear-statistic>
          <linear-statistic class="my-4"
                            title="Appointment"
                            sub-title=" Appointment Increase"
                            icon="trending_up"
                            color="pink"
                            :value="30"
          >
          </linear-statistic>
          <linear-statistic class="my-4"
                            title="Revenue"
                            sub-title="Revenue increase"
                            icon="trending_up"
                            color="primary"
                            :value="50"
          >
          </linear-statistic>
          <linear-statistic class="mt-4"
                            title="Cost"
                            sub-title="Cost reduce"
                            icon="trending_down"
                            color="orange"
                            :value="25"
          >
          </linear-statistic>
        </v-flex>
        </v-layout>
        </v-container>
  </div>
</template>
<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import LinearStatistic from '@/components/widgets/statistic/LinearStatistic';

export default {
  layout: "dashboard",
  components: {
    MiniStatistic,
    LinearStatistic
  },
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>
<style scoped>
.doctor-card {
  background-image: linear-gradient(-20deg, #0f3443 0%, #009688 100%);
}
.registered-card {
  background-image: linear-gradient(-20deg, #19a2ff 0%, #0773bc 100%);
}
.container.grid-list-xl .layout .flex {
    padding: 109px;
}
</style>
