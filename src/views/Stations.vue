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

</style>