<template>
  <div>
    <logo/>
    <navigation/>
    <nuxt/>
  </div>
</template>


<script>
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'
export default {
  components: {Logo, Navigation}
}
</script>


<!--core styles here. Scoped? No...-->
<style lang="scss">

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
	position: relative;
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
	
}
//reset
body,
figure {
	margin: 0;
	padding: 0;
}

img {
	max-width: 100%;
}
//the width=100percent
ul, ol, hr{
	display: block;
	width: 100%;
}

blockquote {
	display:block;
}

//should match fontsize, hence em
ul, ol {
	padding:0;
	list-style-position: inside;
}

i, address {
	font-style: normal;
	color: inherit;
}
fieldset {
	margin:0;
	padding:0;
	border:none;
}

legend {
	//for edge
	display: block;
	width:100%;
	//
	line-height:1;
	padding: 0;
	margin: 0;
	border: none;
}
</style>