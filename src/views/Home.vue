<template>
	<div class="container">
		<transition name="fade" mode="out-in">
			<img v-if="src" :src="src" alt="" />
			<Skeleton v-else circle width="200px" height="200px" />
		</transition>

		<h1 class="title">Country Seach</h1>

		<Searchbar :searchBy="searchBy" @search="search" />

		<Searchby @setSearchBy="setSearchBy" />

		<transition-group v-if="countries" name="flip-list" tag="article">
			<CountryCard
				v-for="country in countries"
				:key="country.name"
				:country="country"
				class="flip-list-item"
			/>
		</transition-group>
		<div v-else>
			<CountryCard v-for="x in Array.from(Array(10).keys())" :key="x" />
		</div>
	</div>
</template>

<script>
import Searchbar from "../components/Searchbar"
import Searchby from "../components/Searchby"
import CountryCard from "../components/CountryCard"
import { Skeleton } from "vue-loading-skeleton"
import axios from "axios"

export default {
	name: "Home",
	components: {
		Searchbar,
		Searchby,
		CountryCard,
		Skeleton
	},
	data() {
		return {
			searchBy: "name",
			src: "",
			countries: null
		}
	},
	beforeMount() {
		this.search()
		const image = new Image()
		image.onload = () => {
			this.src = image.src
		}
		image.src = require("../assets/logo.png")
	},
	methods: {
		search(field) {
			if (field) {
				axios
					.get(`https://restcountries.com/v2/${this.searchBy}/${field}`)
					.then(response => {
						this.countries = response.data
					})
					.catch(() => {
						this.countries = []
					})
			} else {
				axios
					.get(`https://restcountries.com/v2/all`)
					.then(response => {
						this.countries = response.data
					})
					.catch(() => {
						this.countries = []
					})
			}
		},
		setSearchBy(mode) {
			this.searchBy = mode
		}
	}
}
</script>

<style scoped>
.container {
	margin: 0 auto;

	display: flex;
	align-items: center;
	flex-direction: column;
	width: fit-content;
}
.title {
	font-family: arial, sans-serif;
	margin: 1rem auto;
}
.flip-list-item {
	transition: all 0.3s;
}
.flip-list-enter, .flip-list-leave-to
/* .flip-list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateY(-30px);
}
.flip-list-leave-active {
	position: absolute;
}
span {
	height: 200px;
}
</style>
