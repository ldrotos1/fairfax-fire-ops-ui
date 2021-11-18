<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-avatar square>
          <img src="images/ffx-dept-seal.png">
        </q-avatar>
        <q-toolbar-title>{{appTitle}}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'App',
  data:()=>({
    appTitle: "Fairfax County Fire and Rescue Operations Dashboard"
  })
}
</script>
