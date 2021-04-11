<template>
	<input
		type="text"
		class="searchbar"
		v-model="value"
		:placeholder="'Enter country ' + searchBy"
	/>
</template>

<script>
import { debounce } from "lodash"

export default {
	name: "Searchbar",
	props: ["searchBy"],
	emits: ["search"],
	data() {
		return {
			value: ""
		}
	},
	watch: {
		value() {
			this.debounceEmit()
		}
	},
	created() {
		this.debounceEmit = debounce(this.emitSearch, 500)
	},
	methods: {
		emitSearch() {
			this.$emit('search', this.value)
		}
	}
}
</script>

<style scoped>
.searchbar {
	width: 400px;
	height: 40px;

	margin-bottom: 1rem;
	padding: 0 0.5rem;

	text-align: center;
	font-size: 24px;
	outline: none;
	border: 1px solid grey;
	border-radius: 10px;
}
@media only screen and (max-width: 768px) {
	.searchbar {
		width: 300px;
	}
}
</style>
