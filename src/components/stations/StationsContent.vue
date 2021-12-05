<template>
  <div :class="{'inner-container': loading || loadError}">
    <div v-if="!loading && !loadError">
      <StationsList class="fit"
        :stations="stations" 
        v-on:filter-updated="filterStations"
        v-on:sort-station="sortStations">
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
import sortBy from 'lodash/sortBy';

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
    filterStations: function(filterVal) {
      if (!filterVal || filterVal.length === 0) {
        this.stations = this.stationsAll;
      } 
      else {
        filterVal = filterVal.toUpperCase();
        this.stations = filter(this.stationsAll, (s) => { 
          return s.stationName.toUpperCase().includes(filterVal) || 
            s.stationNumber.toUpperCase().includes(filterVal) ||
            s.battalion.toUpperCase().includes(filterVal)
        });
      }
    },
    sortStations: function(sortField) {
      if (sortField) {
        this.stations = sortBy(this.stations, [sortField]);
        this.stationsAll = sortBy(this.stationsAll, [sortField]);
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