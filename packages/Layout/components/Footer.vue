<template>
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
      <!-- <v-card-text class="white--text pt-0">
       Agents On Cloud ' started this year, our company's mission, background,products,are growing up, we  manage to pull off all what you need at Agents on Cloud
       "Always deliver more than expected".~ 
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
      </v-card-text> -->

      <v-divider></v-divider>

      <v-card-text class="white--text">          
          Agents On Cloud &copy; {{ new Date().getFullYear() }}
          </v-card-text>
         
            <v-spacer></v-spacer>
    </v-card>
  </v-footer>


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
   
      padless: true,
      variant: 'default',
    }),
 
    }
</script>

<style lang="scss" scoped>
.footer-color {
  background-color: #009688!important;
}
.app--footer {
  position: fixed !important;
  bottom: 0 !important;
  z-index: 9999;
}
</style>