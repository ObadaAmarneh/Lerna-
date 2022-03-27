<template>
    <div>
<v-alert
  border="right"
  dense
  type="success"
  text
    dismissible
    :value="showSettingsAlert"
>Your settings has been changed</v-alert>
    </div>
</template>

<script>
    export default {
        name: 'SettingsAlert',
        computed: {
            showSettingsAlert(){
                return this.$store.getters.getSettingsAlert
            }
        },
 
    }
</script>

<style lang="scss" scoped>

</style>