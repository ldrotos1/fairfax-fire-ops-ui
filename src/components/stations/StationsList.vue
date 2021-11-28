<template>
  <q-drawer
      v-model="showStationList"
      :width="350"
      persistent
      elevated>
      <q-scroll-area class="fit background">
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
import StationListItem from "@/components/stations/StationListItem";

export default {
  name:'StationsList',
  components: {StationListItem},
  props:{
    stations:{type:Object, default:undefined}
  },
  data:()=>({
    showStationList:true
  }),
}
</script>

<style>

</style>