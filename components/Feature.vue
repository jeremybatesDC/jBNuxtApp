<template>
  <article id="feature">
        <div class="flexWrapper">
          <header class="row">
            <div class="col-xs-7">
                <h2>{{theData.phoneName}}</h2>
                <p>{{theData.opSys}}</p>
            </div>
            <div class="col-xs-2">
              {{theData.wirelessGen}}
            </div>
            <div class="col-xs-3">
                <time>{{theData.lifespan}}</time>
            </div>
          </header>

          <div class="row">
            <div class="col-xs-3">
              <aside>
              
              <span id="headlineLeft">
                {{theData.message}}
              </span>
              </aside>
            </div>
            <div class="col-xs-6">
              <figure>
                <img :src="theData.imgSrc" alt="Google Pixel"/>
              </figure>
            </div>
            <div class="col-xs-3">
              <aside>
                {{theData.message}}
              </aside>
            </div>
          </div>
          <footer class="row">
            <div class="col-xs-3">
              {{theData.causeOfDeath}}
            </div>
            <div class="col-xs-9">
              {{theData.epitath}}
            </div>
          </footer>
        </div>
    </article>
</template>

<script>
  let theData = {
    phoneName: 'Google (HTC) Pixel'
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
  };

</script>

<style lang="scss" scoped>
 #feature {
  //grid-area: feature;
         
  //box-shadow: 1rem 1rem 1rem rgba(#000, .5), -1rem -1rem 1rem rgba(#000, .5);
  position:relative;
  .flexWrapper {
    display: flex;
    flex-direction: column;
    //puts header at top and footer at bottom
    //justify-content: space-between;
    height: 100%;
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



  header, p, figure, aside, footer {
    display: inline-flex;
  }
  header {
    width: 100%;
    //height: 20%;
  }
  aside {
    //width: 33.3333%;
  }
  figure {
    display: block;
    //width: 33.3333%;
      img {
        html & {
          display: block;
          //width: 100%;
          max-width: 100%;
          height: auto;
          max-height: none;
        }
      
    }
  }

  footer {
    width: 100%;
    //height: 20%;
  }

 }
</style>