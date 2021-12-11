<template>
  <q-item class="tile" @mouseover="hoverOver()" @mouseleave="hoverOut()" @click="clicked()">

    <q-item-section top avatar>
      <q-avatar rounded>
        <img :src="getStationPatchUrl">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="label">Station {{station.stationNumber}} - {{station.stationName}}</q-item-label>
      <q-item-label caption>Battalion {{station.battalion}}</q-item-label>
    </q-item-section>

    <q-item-section v-if="getHqStatus" side top>
      <q-badge color="accent" :label="getHqStatus"/>
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
    },
    getHqStatus: function() {
      if (this.station.isBattalionHq) {
        return "BATT HQ";
      }
      else if (this.station.isEmsHq) {
        return "EMS HQ";
      }
      else if (this.station.isOpsHq) {
        return "OPS HQ";
      }
      return undefined;
    }
  },
  methods: {
    clicked: function() {

    },
    hoverOver: function() {

    },
    hoverOut: function() {

    }
  }
}
</script>

<style>
  .label {
    transition: font-weight .2s ease-in-out;
  }
  .tile:hover {
    font-weight: 750;
    cursor: pointer;
  }
</style>