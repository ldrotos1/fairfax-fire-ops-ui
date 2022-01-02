<template>
  <div :id="mapId" v-bind:style="{'height':mapHeight}"></div>
</template>

<script>
import { mapGetters } from 'vuex';
import L from 'mapbox.js';
import find from 'lodash/find';

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
      stationsAll:'stations/getStationsAll',
      stationsActive: 'stations/getStationsSubSet',
      accessToken:'map/getMapboxAccessToken',
      baseMap:'map/getBaseMap',
      mapCenter:'map/getMapCenter',
      zoomLevel:'map/getZoomLevel',
      stationStyle: 'map/getStationStyle',
      stationStyleGrey: 'map/getGreyOutStyle',
      stationRadius: 'map/getStationRadius'
    })
  },
  methods: {
    createMap: function() {
      L.mapbox.accessToken = this.accessToken;
      this.map = L.mapbox.map(this.mapId)
        .setView(this.mapCenter, this.zoomLevel)
        .addLayer(L.mapbox.styleLayer(this.baseMap))

      let stationMarkers = [];
      this.stationsAll.forEach(station => {
        let style = this.stationStyle;
        style['className'] = station.stationNumber;
        stationMarkers.push(
          L.circleMarker([station.latitude, station.longitude])
            .setStyle(style)
            .setRadius(this.stationRadius)
        )
      });
      this.stationLayer = L.layerGroup(stationMarkers);
      this.stationLayer.addTo(this.map);
    },
    updateStationPointStyles: function() {
      this.stationLayer.eachLayer((station) => {
        let stationNum = station.options.className;
        let newStyle = find(this.stationsActive, ['stationNumber', stationNum]) ? this.stationStyle : this.stationStyleGrey;
        newStyle['className'] = stationNum;
        station.setStyle(newStyle);
      })
    }
  },
  mounted: function() {
    this.createMap();
  },
  watch: {
    stationsActive() {
      this.updateStationPointStyles();
    }
  }
}
</script>

<style>

</style>