<template>
  <q-item>
    <q-item-section top avatar>
      <q-avatar square>
        <img :src="getStationPatchUrl">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>Station {{station.stationNumber}} - {{station.stationName}}</q-item-label>
      <q-item-label caption>Battalion {{station.battalion}}</q-item-label>
    </q-item-section>
  </q-item> 
</template>

<script>
export default {
  name: "StationListItem",
  props: {
    station: {type:Object, default:undefined}
  },
  computed: {
    getStationPatchUrl: function() {
      return "images/patches/" + this.station.stationNumber + ".png"
    }
  }
}
</script>

<style>

</style>