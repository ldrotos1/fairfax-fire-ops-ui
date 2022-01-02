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
    map: undefined,
    stationLayer: undefined
  }),
  computed: {
    ...mapGetters({
      stations:'stations/getStationsAll',
      accessToken:'map/getMapboxAccessToken',
      baseMap:'map/getBaseMap',
      mapCenter:'map/getMapCenter',
      zoomLevel:'map/getZoomLevel',
      stationStyle: 'map/getStationStyle',
      stationRadius: 'map/getStationRadius'
    })
  },
  methods: {
    createMap: function() {
      // Creates the map
      L.mapbox.accessToken = this.accessToken;
      this.map = L.mapbox.map(this.mapId)
        .setView(this.mapCenter, this.zoomLevel)
        .addLayer(L.mapbox.styleLayer(this.baseMap))

      // Creates the station layer
      let stationMarkers = [];
      this.stations.forEach(station => {
        stationMarkers.push(
          L.circleMarker([station.latitude, station.longitude])
            .setStyle(this.stationStyle)
            .setRadius(this.stationRadius)
        )
      });
      this.stationLayer = L.layerGroup(stationMarkers);
      this.stationLayer.addTo(this.map);
    }
  },
  mounted: function() {
    this.createMap();
  }
}
</script>

<style>

</style>