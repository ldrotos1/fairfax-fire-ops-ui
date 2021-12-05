<template>
  <div>
    <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">Sort station list</q-tooltip>
    <q-btn-dropdown color="accent" dense dropdown-icon="sort">
      
      <q-list>
        <q-item clickable v-close-popup @click="sortStations('stationNumber')">
          <q-item-section>
            <q-item-label>Sort by Station Number</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="sortStations('stationName')">
          <q-item-section>
            <q-item-label>Sort by Station Name</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="sortStations('battalion')">
          <q-item-section>
            <q-item-label> Sort by Battalion Number</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: 'StationSort',
  methods: {
    sortStations: function(sortBy) {
      this.$emit("sort-stations",sortBy);
    }
  }
}
</script>

<style>

</style>