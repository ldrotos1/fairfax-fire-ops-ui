<template>
  <q-page class="container row justify-center items-center">
    <HomePageTiles/>
  </q-page>
</template>

<script>
import HomePageTiles from "@/components/home/HomePageTiles";

export default {
  name: 'Home',
  components: {HomePageTiles}
}
</script>

<style scoped>
  .container {
    background-color: #e6e6e6;
    position: fixed;
    top: 50px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
</style>