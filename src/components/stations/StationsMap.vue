<template>
  <div :id="mapId" v-bind:style="{'height':mapHeight}"></div>
</template>

<script>
import { mapGetters } from 'vuex';
import L from 'mapbox.js'

export default {
  name: 'StationsMap',
  data:()=>({
    mapId: 'stations-map',
    mapHeight: '500px',
    map: undefined
  }),
  computed: {
    ...mapGetters({
      accessToken:'map/getMapboxAccessToken'
    })
  },
  mounted: function() {
    L.mapbox.accessToken = this.accessToken;
    this.map = L.mapbox.map(this.mapId)
      .setView([40, -74.50], 9)
      .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
  }
}
</script>

<style>

</style>