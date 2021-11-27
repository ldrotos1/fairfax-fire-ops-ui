<template>
  <div>
    <q-card class="row items-center bg-negative text-white q-pa-md">
      <div>
        <q-icon name="warning" size="lg"/>
      </div>
      <div>
        <span class="text-h6 q-ml-md">{{message}}</span>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "ErrorMessageCard",
  props: {
    message: {type:String, default:""}
  }
}
</script>

<style>

</style>