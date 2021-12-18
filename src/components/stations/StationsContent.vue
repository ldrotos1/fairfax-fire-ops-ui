<template>
  <div :class="{'inner-container': loading || loadError}" class="fit">
    <div v-if="!loading && !loadError" class="fit">
      <StationsList class="fit"/>
      <StationsMap class="fit" v-bind:style="{'margin-left':leftMargin, 'margin-bottom':bottomMargin}"/>
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
import { mapGetters } from 'vuex';
import StationsList from '@/components/stations/StationsList';
import StationsMap from '@/components/stations/StationsMap';
import ProgressSpinner from '@/components/common/ProgressSpinner';
import ErrorMessageCard from '@/components/common/ErrorMessageCard';
import {getStationsList} from '@/services/stations';

export default {
  name: "StationsContent",
  components: {
    StationsList,
    StationsMap,
    ProgressSpinner,
    ErrorMessageCard
  },
  data: ()=>({
    loading: true, 
    loadError: false,
    errorMessage:"Unable to retrieve station list. Please try again later."
  }),
  computed: {
    ...mapGetters({
      stationsAll: 'stations/getStationsAll',
      leftMargin: 'layout/setStationMapLeftMargin',
      bottomMargin: 'layout/setStationMapBottomMargin'
    })
  },
  created: async function() {
    if (this.stationsAll.length === 0) {
      let response = await getStationsList();
      this.$store.commit('stations/setStations', response);
      this.loadError = response ? false : true;
      this.loading = false;
    } else {
      this.loading = false;
    }
  }
}
</script>

<style>

</style>