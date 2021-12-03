<template>
  <div :class="{'inner-container': loading || loadError}">
    <div v-if="!loading && !loadError">
      <StationsList class="fit"
        :stations="stations" 
        v-on:filter-updated="filterStations">
      </StationsList>
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
import filter from 'lodash/filter';

export default {
  name: "StationsContent",
  components: {
    StationsList,
    ProgressSpinner,
    ErrorMessageCard
  },
  data: ()=>({
    stationsAll: undefined,
    stations: undefined,
    loading: true, 
    loadError: false,
    errorMessage:"Unable to retrieve station list. Please try again later."
  }),
  methods: {
    filterStations: function(value) {
      if (!value || value.length === 0) {
        this.stations = this.stationsAll;
      } 
      else {
        value = value.toUpperCase();
        this.stations = filter(this.stationsAll, (s) => { 
          return s.stationName.toUpperCase().includes(value) || 
            s.stationNumber.toUpperCase().includes(value) ||
            s.battalion.toUpperCase().includes(value)
        });
      }
    }
  },
  created: async function() {
    let response = await getStationsList();
    this.stationsAll = response
    this.stations = response;
    this.loadError = response ? false : true;
    this.loading = false;
  }
}
</script>

<style>

</style>