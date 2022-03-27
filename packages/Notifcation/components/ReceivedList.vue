<template>
  <div class="mt-10">
    <v-container class="py-8 px-6" fluid>
      <v-row>
        <v-col v-for="card in cards" :key="card" cols="12">
          <v-card>
            <v-subheader>{{ card }}</v-subheader>
            <v-list two-line>
              <template v-for="n in 10">
                <v-list-item :key="n">
                  <v-list-item-avatar color="grey darken-1">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-icon class="dots-position">mdi-dots-horizontal</v-icon>
                    <v-list-item-title>Message {{ n }}</v-list-item-title>
                    <v-list-item-subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nihil repellendus distinctio similique
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider
                  v-if="n !== 10"
                  :key="`divider-${n}`"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ReceivedList",
};
</script>

<style scoped>
.dots-position {
  margin-left: 48%;
}
.col {
}
.col-12 {
  width: 100%;
  padding: 58px;
  /* margin: auto; */
  margin-top: 324px;
}
</style>
