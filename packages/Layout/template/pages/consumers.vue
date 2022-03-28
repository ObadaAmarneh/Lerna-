<template>
   <v-container grid-list-xl fluid>
    <h4>
      <i class="fa fa-smile-o"></i>
      Consumers.</h4>
  </v-container>
</template>

<script>
    export default {
         layout: "dashboard",
                   mounted() {
            this.$router.push('Consumer')
            console.log('mounted pushed');
        }
    }
</script>

<style lang="scss" scoped>

</style>