<template>
  <q-drawer
      v-model="showStationList"
      :width="375"
      persistent
      elevated>
        
      <div class="row absolute-top list-toolbar background">
        <StationFilter v-on:filter-updated="filterStations"/>
      </div>

      <q-scroll-area class="list background">
        <q-list padding>
          <div v-for="station in stations" v-bind:key="station.stationId">
            <StationListItem :station="station"/>
            <q-separator spaced inset/>
          </div>
        </q-list>
      </q-scroll-area>

  </q-drawer>
</template>

<script>
import StationFilter from "@/components/stations/StationFilter";
import StationListItem from "@/components/stations/StationListItem";

export default {
  name:'StationsList',
  components: {
    StationFilter,
    StationListItem
  },
  props:{
    stations:{type:Object, default:undefined}
  },
  data:()=>({
    showStationList: true,
    stationList: []
  }),
  methods: {
    filterStations: function(value) {
      this.$emit("filter-updated", value);
    }
  }
}
</script>

<style>
  .list-toolbar {
    height: 75px;
    border-bottom: 1px solid #888888;
  }

  .list {
    margin-top: 75px;
    height: calc(100% - 75px);
  }
</style>