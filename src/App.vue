<template>
	<transition name="fade" mode="out-in"><router-view /></transition>
</template>

<style>
@font-face {
	font-family: Poppins-Regular;
	src: url("./assets/Poppins-Regular.ttf");
}
*::-webkit-scrollbar {
	display: none;
}
* {
	margin: 0;
	padding: 0;
}
html,
body {
	width: 100%;
	height: 100%;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	width: fit-content;
	height: fit-content;
	font-family: Arial;
}
.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.4s;
	transition-property: opacity;
	transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
