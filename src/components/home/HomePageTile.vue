<template>
	<q-card class="card bg-primary shadow-7 shadow-transition" 
		@mouseover="isMouseOver=true" 
		@mouseout="isMouseOver=false"
		v-on:click="gotoPage()"
		:class="{'shadow-18': isMouseOver}">
			<div class="row justify-center">
				<q-icon 
					:name="icon" 
					class="q-pt-lg" 
					:class="{'hovering': isMouseOver, 'not-hovering': !isMouseOver}" 
					style="font-size:3rem"/>
			</div>
			<q-card-section class="row justify-center">
				<div class="text-h6 text-uppercase" :class="{'hovering': isMouseOver, 'not-hovering': !isMouseOver}">{{label}}</div>
			</q-card-section>
	</q-card>
</template>

<script>
export default {
	name: "HomePageTile",
	props:{
		label:{type:String, default:undefined},
		icon:{type:String, default:undefined},
		url:{type:String, default:undefined}
	},
	data:()=>({
		isMouseOver:false
	}),
	methods: {
		gotoPage: function() {
			this.$router.push(this.url);
		}
	}
}
</script>

<style>
	.card {
		width: 275px;
		cursor: pointer;
	}
	.not-hovering {
		color: #ffffff;
	}
	.hovering {
		color:#ffe866;
	}
</style>