<template>
   <v-card  class="card-border-color" width="420px" height="200px" hover   elevation="7" >

          <v-card-actions>
                 <v-card-title>
        {{title}}
        
          </v-card-title>
            <v-spacer></v-spacer>
            <v-card-title>50+
              
            </v-card-title>
          </v-card-actions>
         
          <v-card-subtitle    class="ml-2 ">
         
        
            {{text}}
          </v-card-subtitle>
              <v-card-actions>
      
        <div class="my-4 text-subtitle-1 ml-3">
         {{subTitle}} 4
      </div>
        
            <v-spacer></v-spacer>
           
                  <div class="my-4 text-subtitle-1 ml-3">
         {{sub}} 3
      </div>
          </v-card-actions>

          
        </v-card>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    subTitle: String,
    color: String,
    sub: String,
    text:String
  }
};
</script>
<style scoped>


.card-border-color{

border-image: linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF);
border-image-slice: 1;
}
</style>
