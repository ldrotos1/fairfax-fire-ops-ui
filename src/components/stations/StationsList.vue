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
          <transition-group name="station-list" tag="div" :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave">
              <div v-for="station in stations" v-bind:key="station.stationId">
                <StationListItem :station="station"/>
                <q-separator spaced inset/>
              </div>
          </transition-group>
        </q-list>
      </q-scroll-area>

  </q-drawer>
</template>

<script>
import gsap from "gsap";
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
    },
    beforeEnter: function(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: 'auto',
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },
    leave: function(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    }
  }
}
</script>

<style>
  .station-list-move {
    transition: transform 0.8s ease;
  }
  .list-toolbar {
    height: 75px;
    border-bottom: 1px solid #888888;
  }
  .list {
    margin-top: 75px;
    height: calc(100% - 75px);
  }
</style>