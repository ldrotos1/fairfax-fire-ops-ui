<template>
  <q-input v-model="filterText" 
    class="full-width" 
    label="Fitler on number, name, or battalion" 
    color="accent"
    square outlined dense 
    hide-bottom-space
    clearable
    clear-icon="close"
    @update:model-value="filterUpdated">
    <template v-slot:prepend>
      <q-icon name="filter_alt"/>
    </template>
  </q-input>
</template>

<script>
export default {
  name:'StationFilter',
  data:()=>({
    filterText: ""
  }),
  methods:{
    filterUpdated: function(filterOn) {
      this.$store.commit('stations/filterStations', filterOn);
    }
  }
}
</script>

<style>

</style>