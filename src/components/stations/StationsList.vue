<template>
  <q-drawer
      v-model="showStationList"
      :width="400"
      persistent
      elevated>
      <q-scroll-area class="fit">
        <div v-if="stations" class="q-pa-sm">
          <div v-for="station in stations" :key="station.stationId">
            {{station.stationName}}
          </div>
        </div>
      </q-scroll-area>
  </q-drawer> 
</template>

<script>
export default {
  name:'StationsList',
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