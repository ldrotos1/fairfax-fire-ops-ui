<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>

        <!-- Application menu -->
        <q-btn flat round dense icon="menu" class="q-mr-sm">
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 100px">
              <q-item v-for="page in getPages" v-bind:key="page.label" 
                clickable v-close-popup 
                v-on:click="gotoPage(page.url)">
                  <q-item-section>{{page.label}}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <!-- Title section -->
        <q-avatar square style="cursor:pointer">
          <img src="images/app/ffx-dept-seal.png" v-on:click="gotoHome"/>
        </q-avatar>
        <q-toolbar-title>{{appTitle}}</q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data:()=>({
    appTitle: "Fairfax County Fire and Rescue Operations Dashboard"
  }),
  computed: {
    ...mapGetters(['getPages'])
  },
  methods: {
    gotoHome: function() {
      this.$router.push('/');
    },
    gotoPage: function(url) {
      this.$router.push(url);   
    }
  }
}
</script>

<style scoped>

</style>
