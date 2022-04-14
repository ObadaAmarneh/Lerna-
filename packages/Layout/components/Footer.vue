<template>
    <div>
<v-footer
    dark
    padless
    height ="1px"
  >
    <v-card
      flat
      tile
      class=" footer-color white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          to= "/Clinic"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
       Agents On Cloud ' started this year, our company's mission, background,products,are growing up, we  manage to pull off all what you need Agents on Cloud 
       "Always deliver more than expected".~ 

      example text field here we can write  
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">          
          Agents On Cloud &copy; {{ new Date().getFullYear() }}
          </v-card-text>
         
            <v-spacer></v-spacer>
    </v-card>
  </v-footer>
    </div>


</template>

<script>
    export default {
           data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-phone',
      ],
      path:[
        '/',
        '/',
        '/',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: true,
      variant: 'default',
    }),
    computed: {
     
    },
    }
</script>

<style lang="scss" scoped>
.footer-color {
  background-color: #1976d2 !important;
}
.app--footer {
  position: fixed !important;
  bottom: 0 !important;
  width: 100%;
  z-index: 9999;
}
</style>