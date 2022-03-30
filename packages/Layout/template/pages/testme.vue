<template>
    <div>
        <h1>here is the compomnet</h1>
<ClickMe></ClickMe>
    </div>
</template>

<script>
import ClickMe from '../components/test.vue';
    export default {
        layout: 'dashboard',
        components:{
            ClickMe
        }
    }
</script>

<style lang="scss" scoped>

</style>