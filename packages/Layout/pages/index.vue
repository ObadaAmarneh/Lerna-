<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid class="mt-14">
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg3 sm6 xs12>
          <v-card class="doctor-card ml-14" dark elevation="2" outlined tile>
            <v-card-actions>
              <v-card-title class="text-h5"> Total Doctors </v-card-title>
              <v-spacer></v-spacer>
              <v-card-title class="text-h5"> 45 </v-card-title>
            </v-card-actions>
            <v-card-subtitle class="ml-3">Total Patient: 5735.</v-card-subtitle>

            <v-card-actions>
              <v-card-subtitle> Medical Officers: 0 </v-card-subtitle>
              <v-spacer> </v-spacer>
              <v-card-subtitle> Anaesthetists: 0 </v-card-subtitle>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex lg4  sm6 xs12>
          <v-card     max-width="400"
     class="  doctor-card" color="#385F73" elevation="2" outlined tile dark>
            <v-card-actions>
              <v-card-title class="text-h5"> Registered Patient </v-card-title>
              <v-spacer></v-spacer>
              <v-card-title class="text-h5"> 45 </v-card-title>
            </v-card-actions>
            <v-card-subtitle class="ml-3">Total Patient: 5735.</v-card-subtitle>
            <v-card-actions>
              <v-card-subtitle> Today : 0 </v-card-subtitle>
              <v-spacer></v-spacer>
              <v-card-subtitle> Yesterday </v-card-subtitle>
            </v-card-actions>
          </v-card>
        </v-flex>
      <v-flex lg3 sm6 xs12>
          <v-card class="doctor-card" dark elevation="2" outlined tile>
            <v-card-actions>
              <v-card-title class="text-h5"> Total Doctors </v-card-title>
              <v-spacer></v-spacer>
              <v-card-title class="text-h5"> 45 </v-card-title>
            </v-card-actions>
            <v-card-subtitle class="ml-3">Total Patient: 5735.</v-card-subtitle>

            <v-card-actions>
              <v-card-subtitle> Medical Officers: 0 </v-card-subtitle>
              <v-spacer> </v-spacer>
              <v-card-subtitle> Anaesthetists: 0 </v-card-subtitle>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
export default {
  layout: "dashboard",
  components: {
    MiniStatistic,
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
</style>
