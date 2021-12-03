<template>
  <div class="row items-center full-width q-px-md">
    <q-input v-model="filterText" 
      class="full-width" 
      label="Fitler on station number, name, or battalion" 
      square outlined dense 
      hide-bottom-space
      clearable
      clear-icon="close"
      @update:model-value="filterUpdated">
      <template v-slot:prepend>
        <q-icon name="filter_alt"/>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name:'StationFilter',
  data:()=>({
    filterText: ""
  }),
  methods:{
    filterUpdated: function(value) {
      this.$emit("filter-updated", value);
    }
  }
}
</script>

<style>

</style>