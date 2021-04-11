<template>
	<div class="container">
		<BackButton />
		<article class="upper">
			<transition name="fade" mode="out-in">
				<img v-if="country.flag" :src="country.flag" alt="Flag" />
				<Skeleton v-else width="300px" height="200px" />
			</transition>

			<transition name="fade" mode="out-in">
				<h1 v-if="country.name" class="name">{{ country.name }}</h1>
				<Skeleton
					v-else
					style="margin: auto 2rem"
					width="300px"
					height="40px"
				/>
			</transition>
		</article>
		<article class="lower">
			<CountryDetail
				property="Alpha Code"
				:value="country.alpha3Code || country.alpha2Code"
			/>
			<CountryDetail
				property="Calling Code"
				:value="country.callingCodes.join('<br>')"
			/>
			<CountryDetail property="Capital" :value="country.capital" />
			<CountryDetail property="Population" :value="country.population" />
			<CountryDetail
				property="Timezones"
				:value="country.timezones.join('<br>')"
			/>
			<CountryDetail
				property="Currencies"
				:value="
					country.currencies
						.map(c => `${c.name} (${c.symbol})`)
						.join('<br>')
				"
			/>
			<CountryDetail
				property="Languages"
				:value="
					country.languages
						.map(l => `${l.name} -> ${l.nativeName}`)
						.join('<br>')
				"
			/>
			<CountryDetail
				property="Regional Blocs"
				:value="
					country.regionalBlocs
						.map(rb => `${rb.name} (${rb.acronym})`)
						.join('<br>')
				"
			/>
		</article>
	</div>
</template>

<script>
import axios from "axios"
import CountryDetail from "../components/CountryDetail"
import BackButton from "../components/BackButton"
import { Skeleton } from "vue-loading-skeleton"

export default {
	name: "Country",
	components: {
		CountryDetail,
		BackButton,
		Skeleton
	},
	beforeCreate() {
		axios
			.get(
				`https://restcountries.eu/rest/v2/name${this.$route.path}?fullText=true`
			)
			.then(response => {
				this.country = response.data[0]
			})
			.catch(() => {
				this.$router.push("/")
			})
	},
	data() {
		return {
			country: {
				flag: "",
				name: "",
				alpha2Code: "",
				alpha3Code: "",
				callingCodes: [],
				capital: "",
				population: "",
				timezones: [],
				currencies: [],
				languages: [],
				regionalBlocs: []
			}
		}
	}
}
</script>

<style scoped>
.container {
	padding-bottom: 1rem;
}
.upper {
	display: flex;
}
.upper img {
	width: 300px;
	border: 3px solid gold;
}
.upper h1 {
	margin: auto 2rem;
	font-size: 40px;
}
@media only screen and (max-width: 768px) {
	.upper {
		flex-direction: column;
	}
	.upper img {
		margin: 0 auto;
	}
	.upper h1 {
		margin: 0.5rem auto;
	}
}
</style>
