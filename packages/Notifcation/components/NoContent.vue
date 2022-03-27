<template>
  <div class="parent">
      <v-icon class="ml-16" color="red" style="font-size: 100px">mdi-bell-off</v-icon>
    <div class="child">
    <h1 >No notification found</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoContent",
};
</script>
<style lang="scss" scoped>

.parent {
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.child {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 4%;

}

</style>
