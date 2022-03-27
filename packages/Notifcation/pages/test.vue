<template>
  <no-ssr>
    <div>
      <v-app>
        <v-main>
          <div class="margin">
            <v-card>
              <v-container fluid>
                <v-row align="center">
                  <v-col cols="12">
                    <v-autocomplete
                      v-model="values"
                      :items="items"
                      outlined
                      dense
                      chips
                      small-chips
                      label="Outlined"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12">
                    <v-autocomplete
                      :items="items"
                      dense
                      chips
                      small-chips
                      label="Solo"
                      multiple
                      solo
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12">
                    <v-autocomplete
                      v-model="value"
                      :items="items"
                      dense
                      filled
                      label="Filled"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </div>
        </v-main>
      </v-app>
    </div>
  </no-ssr>
</template>
<script>
  export default {
    data: () => ({
      items: ['foo', 'bar', 'fizz', 'buzz'],
      value: null,
    }),
  }
</script>
<style scoped>
.margin {
  margin-top: 10%;
}
</style>