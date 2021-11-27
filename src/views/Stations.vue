<template>
  <q-page class="outer-container">
    <PageSubHeading/>
    <StationsContent/>
  </q-page>
</template>

<script>
import PageSubHeading from '@/components/common/PageSubHeading';
import StationsContent from '@/components/stations/StationsContent'

export default {
  name: 'Stations',
  components: {
    PageSubHeading,
    StationsContent
  }
}
</script>

<style>
  .outer-container {
    background-color: #e6e6e6;
    position: fixed;
    top: 50px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
</style>