<template>
	<select
		v-model="option"
		@change="changed"
		class="custom-select mr-sm-2"
		id="inlineFormCustomSelect"
	>
		<option value="name" selected>Name</option>
		<option value="currency">Currency</option>
		<option value="lang">Language</option>
		<option value="callingcode">Calling Code</option>
		<option value="region">Region</option>
	</select>
</template>

<script>
export default {
	name: "Searchby",
	emits: ["setSearchBy"],
	data() {
		return {
			option: "name"
		}
	},
	methods: {
		changed() {
			this.$emit("setSearchBy", this.option)
		}
	}
}
</script>

<style scoped>
select {
	width: 500px;
}
@media only screen and (max-width: 768px) {
	select {
		width: 300px;
	}
}
</style>
