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
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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