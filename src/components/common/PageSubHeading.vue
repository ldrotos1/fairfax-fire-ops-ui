<template>
	<div class="bg-secondary text-white">
		<q-toolbar class="shadow-5" inset>
			<q-avatar>
				<q-icon :name="pageIcon"></q-icon>
			</q-avatar>
			<q-toolbar-title class="text-h6">{{pageLabel}}</q-toolbar-title>
		</q-toolbar>
	</div>
</template>

<script>
export default {
	name:"PageSubHeading",
	data:()=>({
    pageLabel: '',
    pageIcon: ''
  }),
  created: function() {
    let pageInfo = this.$store.getters['pages/getPageFromName'](this.$route.name);
    this.pageLabel = pageInfo.label;
    this.pageIcon = pageInfo.icon;
  }
}
</script>

<style>

</style>