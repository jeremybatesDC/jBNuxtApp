<template>
    <nav>
      <router-link class="nav__link" to="/">Home</router-link>
      <router-link class="nav__link" to="/about/">About</router-link>
      <router-link class="nav__link" to="/example/">Example</router-link>
    </nav>
</template>

<script>
	export default {}
</script>

<style lang="scss" scoped>

nav {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
	background: rgba(#fff, .5);
}
.nav__link {
	font-size: 1rem;
	text-transform: uppercase;
	margin-left: 1rem;
	&:first-child {
		margin-left: 0;
	}
}
</style>
