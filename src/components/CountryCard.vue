<template>
	<div class="country">
		<h2 v-if="country" class="name" @click="redirect()">
			{{ country.name }} ({{ country.alpha3Code }})
		</h2>
		<Skeleton
			v-else
			width="200px"
			height="24px"
			style="margin-bottom: 0.5rem; display: block;"
		/>

		<p>
			Region:
			<span v-if="country">{{ country.region }}</span>
			<Skeleton v-else width="100px" height="16px" />
		</p>
		<p>
			Capital:
			<span v-if="country">{{ country.capital }}</span>
			<Skeleton v-else width="100px" height="16px" />
		</p>
		<p>
			Population: About
			<span v-if="country">{{ population }}</span>
			<Skeleton v-else width="100px" height="16px" />
		</p>
	</div>
</template>

<script>
import { Skeleton } from "vue-loading-skeleton"

export default {
	name: "CountryCard",
	props: ["country"],
	components: {
		Skeleton
	},
	computed: {
		population() {
			const pop = this.country.population
			if (pop < 1000) return pop
			if (pop < 1000000) {
				return Math.floor(pop / 1000) + " thousand"
			}
			return Math.floor(pop / 1000000) + " million"
		}
	},
	methods: {
		redirect() {
			this.$router.push(this.country.name)
		}
	}
}
</script>

<style scoped>
.country {
	width: 350px;
	margin: 0.5rem 0;
	padding: 1rem;
	border-radius: 15px;
	background: #f0f0f04d;
}
@media only screen and (max-width: 768px) {
	.country {
		width: 350px;
	}
}
@media only screen and (min-width: 768px) {
	.country {
		width: 500px;
	}
}
.name {
	margin-bottom: 0.5rem;
	font-size: 24px;
}
.name:hover {
	text-decoration: underline;
	cursor: pointer;
}
p {
	margin: 0;
}
</style>
