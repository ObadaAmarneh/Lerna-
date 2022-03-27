<template>

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