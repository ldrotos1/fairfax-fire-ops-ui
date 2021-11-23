<template>
  <q-page class="container">
    <PageSubHeading/>
    <q-drawer
        v-model="showStationList"
        :width="400"
        elevated>
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            {{ $route.name }}
            <div v-for="n in 50" :key="n">Drawer n / 50</div>
          </div>
        </q-scroll-area>
    </q-drawer>

  </q-page>
</template>

<script>
import PageSubHeading from '@/components/common/PageSubHeading';
import {getStationsList} from '@/services/stations';

export default {
  name: 'Stations',
  components: {PageSubHeading},
  data:()=>({
    showStationList:true
  }),
  created: function() {
    console.log(process.env.VUE_APP_FFX_SERVICE_HOST)
    getStationsList();
  }
}
</script>

<style>
  .container {
    background-color: #e6e6e6;
    position: fixed;
    top: 50px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
</style>