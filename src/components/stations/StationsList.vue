<template>
  <q-drawer
      v-model="showStationList"
      :width="listWidth"
      persistent
      elevated>
        
      <div class="row q-px-md items-center absolute-top list-toolbar background">
        <div class="col q-mr-md">
          <StationFilter/>
        </div>
        <div class="col-shrink">
          <StationSort/>
        </div>
      </div>

      <q-scroll-area class="list background">
        <q-list>
          <transition-group name="station-list" tag="div" :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave">
              <div v-for="station in stations" v-bind:key="station.stationId">
                <StationListItem :station="station"/>
                <q-separator inset/>
              </div>
          </transition-group>
        </q-list>
      </q-scroll-area>

  </q-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import gsap from "gsap";
import StationFilter from "@/components/stations/StationFilter";
import StationSort from  "@/components/stations/StationSort";
import StationListItem from "@/components/stations/StationListItem";

export default {
  name:'StationsList',
  components: {
    StationFilter,
    StationSort,
    StationListItem
  },
  data:()=>({
    showStationList: true
  }),
  computed: {
    ...mapGetters({
      stations: 'stations/getStationsSubSet',
      listWidth: 'layout/getStationListWidth'
    })
  },
  methods: {
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
    height: 70px;
    border-bottom: 1px solid #888888;
  }
  .list {
    margin-top: 70px;
    height: calc(100% - 70px);
  }
</style>