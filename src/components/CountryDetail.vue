<template>
	<div class="detail">
		<p class="property">
			{{ property }}
		</p>
		<transition name="fade" mode="out-in">
			<Skeleton class="value-skeleton" v-if="!value"/>
			<p v-else class="value" v-html="value"></p
		></transition>
	</div>
</template>

<script>
import { Skeleton } from "vue-loading-skeleton"

export default {
	name: "Detail",
	components: {
		Skeleton
	},
	props: ["property", "value"]
}
</script>

<style scoped>
.detail {
	margin: 1.5rem;
	display: grid;
	grid-template-areas: "property value";
	grid-template-columns: 40% 60%;
}
p {
	margin: 0;
}
.property {
	grid-area: property;
	font-size: 20px;
	font-family: Poppins-Regular;
	text-decoration: underline;
}
.value {
	grid-area: value;
	font-weight: bold;
	font-size: 18px;
	font-family: monospace;
}
.value-skeleton {
	grid-area: value;
	height: 26.4px;
}
@media only screen and (max-width: 768px) {
	.detail {
		grid-template-areas:
			"property"
			"value";
		grid-template-columns: auto auto;
	}
}
</style>
