<template>
  <div>
    <navigation/>
    <nuxt/>
  </div>
</template>


<script>
import Navigation from '~/components/Navigation.vue'
export default {
  components: {Navigation}
}
</script>


<!--core styles here. Scoped? No...-->
<style lang="scss">
body {font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;}
</style>