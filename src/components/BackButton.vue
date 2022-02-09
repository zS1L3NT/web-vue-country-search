<template>
	<button @click="$router.go(-1)" class="back-button">
		<i class="fa fa-arrow-left" aria-hidden="true"></i>Back
	</button>
</template>

<script>
export default {
	name: "BackButton"
}
</script>

<style scoped>
.back-button {
	background: #ffffff;
	border: none;
	outline: none;
	font-size: 24px;
	cursor: pointer;
	margin: 1rem;
	transition: transform 0.3s;
}
.back-button:hover {
	transform: scale(1.1);
}
.back-button i {
	margin-right: 0.5rem;
}
</style>
