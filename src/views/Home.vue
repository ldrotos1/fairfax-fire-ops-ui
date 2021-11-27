<template>
  <q-page class="outer-container row justify-center items-center">
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

</style>