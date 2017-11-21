<template>
  <div class="defaultView__wrapper">
    <!-- <logo/> -->
    <!-- <navigation/> -->
    <main>
    	<nuxt/>
	</main>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.0.1/lazysizes.min.js"></script> -->
  </div>
</template>


<script>
import Navigation from '~/components/Navigation.vue';


(function consoleGreetings(){
	var colophoneText = 'Colophone'
	console.log(`${colophoneText}
		'Transparent' JPGs with SVG clippath. Via https://css-tricks.com/transparent-jpg-svg/
		CSS Grid
		Lazyloading
		Progressive Web App (lighthouse score of)

	`);
})();


var CustomLazySVGjpgImageFunctionWrapper = (function(){

  function customLazySVGjpgImageFunct(){
  	//this needs a resizer i think unfortunately for safari looks

    var imageElements = [...document.querySelectorAll('image')];
    // imageElements[0].attr()

    imageElements.map(function(thisImageElement){
    	var theDataLink = thisImageElement.getAttribute('data-xlink:href');
    	thisImageElement.setAttribute('xlink:href', theDataLink)
    })
  }

  window.addEventListener('load', customLazySVGjpgImageFunct, false);

})();
    

  

export default {
  components: {Navigation, CustomLazySVGjpgImageFunctionWrapper}
}



</script>


<!--core styles here. Scoped? No...-->
<style lang="scss">

html {
  box-sizing: border-box;
  font-size: 10px;
	-webkit-font-smoothing: antialiased;
	//this scales EVERYTHING up at xxl
	@media(max-width: 767px){
		font-size: 9px;
	}
	@media(min-width: 1536px){
		font-size: 12px;
	}
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
	position: relative;
	height: 100vh;
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
	font-size:1.6rem;
	margin: 0;
	padding: 0;
}
//reset
figure {
	margin: 0;
	padding: 0;
}

#__nuxt {
	height:100%;
	//display:flex;
	//justify-content: center;
}

.defaultView__wrapper {
	//display:flex;
	//align-items: center;
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

p {
	padding: 0;
	margin:0;
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

//typography

h1, h2, h3, h4, h5, h6 {
	margin: 0;
	padding-bottom: 0;
	line-height:1.1111;
}
h1 {
	font-size: 3.6rem;
	//text-transform:uppercase;
}

h2 {
	font-size: 3.2rem;
	//text-transform:uppercase;
}

h3 {
	font-size: 2.8rem;
}

h4 {
	font-size: 2.2rem;
}

h5 {
	font-size: 1.8rem;
}

h6 {
	font-size: 1.6rem;
}


</style>