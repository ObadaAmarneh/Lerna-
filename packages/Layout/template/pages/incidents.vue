<template>
 <div class="text-center">
   
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>
<v-card >
  <v-card-action>
    <v-btn  @click="dialog = false"> Click me</v-btn>
  </v-card-action>
  <iframe  width="100%"  scrolling="no" height="100% " style="width:100%;border:none; overflow-y: hidden;  margin: 0 auto;" seamless="" src="https://inventory.agentsoncloud.com/CreateNewSupplier">
</iframe>
</v-card>

    </v-dialog>

</div>

</template>

<script>
    window.onmessage = (e) => {
      if (e.data.hasOwnProperty("frameHeight")) {
        document.getElementById("iframe").style.height = `${e.data.frameHeight + 30}px`;
      }
    };
    export default {
        layout: 'dashboard',
          data: () => ({
      dialog:false
    
    }),
    
    }
</script>

<style lang="scss" scoped>
iframe { 
  height: 80vh;
   margin: 0 auto;
   display:block;

}

</style>