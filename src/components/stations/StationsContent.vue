<template>
  <div :class="{'inner-container': loading || loadError}">
    <div v-if="!loading && !loadError">
      <StationsList :stations="stations" class="fit"/>
    </div>
    <div v-else-if="loading" class="row justify-center items-center fit">
      <ProgressSpinner/>
    </div>
    <div v-else-if="loadError" class="row justify-center items-center fit">
      <ErrorMessageCard :message="errorMessage"/>  
    </div>
  </div>
</template>

<script>
import StationsList from '@/components/stations/StationsList';
import ProgressSpinner from '@/components/common/ProgressSpinner';
import ErrorMessageCard from '@/components/common/ErrorMessageCard';
import {getStationsList} from '@/services/stations';

export default {
  name: "StationsContent",
  components: {
    StationsList,
    ProgressSpinner,
    ErrorMessageCard
  },
  data: ()=>({
    stations: undefined,
    loading: true, 
    loadError: false,
    errorMessage:"Unable to retrieve station list. Please try again later."
  }),
  created: async function() {
    this.stations = await getStationsList();
    this.loadError = this.stations ? false : true;
    this.loading = false;
  }
}
</script>

<style>

</style>