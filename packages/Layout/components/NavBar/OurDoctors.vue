<template>


  <v-container fluid class="ma-0 pa-0">
      <v-parallax class="hero">
      <div class="hero-inner">
     
       
      </div>
    </v-parallax>
   
      </v-container>
</template>

<script>
//todo delte bread c
    export default {
        
  data() {
    return {

      itemsBread: [
        {
          text: "categories",
          link: true,
          exact: true,
          disabled: false,
          to: {
            name: "providers",
          },
        },
        {
          text: "listing doctors",
          disabled: true,
          href: "http://localhost:53533/",
        },
      ],
   
    };
  },
  methods: {
   
  },
  computed: {
       routeName(){
        let upper = $nuxt.$route.name.toUpperCase()
          return  upper
    }
  }
    }
</script>

<style lang="scss" scoped>

.hero h1 {
  /* Text styles */
  font-size: 3.5em;
  /* Margins */
  margin-top: 0;
  margin-bottom: 0.5em;
}

.hero {
  /* Sizing */
  width: 100vw;
  height: 300px !important;

  /* Flexbox stuff */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Text styles */
  text-align: center;
  color: white;
  /* Background styles */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_960_720.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>