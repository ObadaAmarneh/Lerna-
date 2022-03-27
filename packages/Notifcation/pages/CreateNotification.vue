<template>
  <div>
    <v-app>
      <v-main>
        <div class="margin">
          <NotificationForm/>

          
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NotificationForm from '../components/NotificationForm.vue'
export default {
  name: "CreateNotification",
  components: {
    NotificationForm
  }
};
</script>

<style lang="scss" scoped>
.margin {
  margin-top: 25%;
}
</style>
