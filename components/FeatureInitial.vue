<template>
  <article id="feature">
    <div class="flexWrapper">
      <header class="row">
        
      </header>

      <div class="row">
        <blockquote>
          <p><em>You are where phones go to die.</em></p>
          <p>--My mother</p>
        </blockquote>
      </div>
      <footer class="row">
       
      </footer>
    </div>
  </article>
</template>

<script>
  let theData = {
    make: 'HTC'
    ,phoneName: 'Google Pixel'
    ,opSys: 'Android 8 Oreo'
    ,message: 'Add Stats here'
    ,wirelessGen: '4G LTE'
    ,lifespan: '2015-2016'
    ,causeOfDeath: 'tradeIn'
    ,epitath: 'A good phone indeed'
    ,imgSrc: 'http://placehold.it/400x400'
    //,imgSrc: '/_nuxt/img/opt/google_pixel_400x400.jpg'
  }
  export default {
    data:function(){
      return { 
        theData
      }
    }
    // async asyncData ({ params }) {
    //   let { data } = await axios.get(`https://my-api/posts/${params.id}`)
    //   return { title: data.title }
    // }

  };


  //on click, get the appropriate phone record and refresh the view... 


</script>

<style lang="scss" scoped>
 #feature {
  //grid-area: feature;
         
  //box-shadow: 1rem 1rem 1rem rgba(#000, .5), -1rem -1rem 1rem rgba(#000, .5);
  position:relative;
  display: grid;
  height: 100%;
  background:yellow;
  .flexWrapper {
    //display: flex;
    //flex-direction: column;
    //puts header at top and footer at bottom
    //justify-content: space-between;
    //height: 100%;
    padding:1em;
    [data-active="grid__wrapper--ACTIVE"] & {
      //position:relative;
      //background: red;
      //transform: scale(1.1);
      //transform-origin: center;

      //z-index: 1;
      box-shadow: inset -2px -2px #000, inset 2px 2px #000; 
    }
    .row {
      &:last-child {
        flex-grow: 1;
        [class^="col"]{
          align-self: flex-end;
        }
      }
    }

  }



  footer {
    width: 100%;
    //height: 20%;
  }

 }
</style>