<template>
  <div class="row">
		<div v-for="page in pages" v-bind:key="page.label">
			<HomePageTile 
				:label="page.label" 
				:icon="page.icon"
				:url="page.url">
			</HomePageTile>
		</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HomePageTile from "@/components/home/HomePageTile";

export default {
	name: "HomePageTiles",
	components: {HomePageTile},
	computed: {
		...mapGetters({pages: 'pages/getPages'}),
	}
}
</script>

<style>

</style>