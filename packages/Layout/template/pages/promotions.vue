<template>
<iframe  width="100%" height="100%" src="https://marketing.agentsoncloud.com/">

</iframe>
</template>

<script>
    export default {
        layout: 'dashboard',
            mounted() {
            this.$router.push('notificationSettings')
            console.log('mounted pushed');
        }
    }
</script>

<style lang="scss" scoped>

</style>