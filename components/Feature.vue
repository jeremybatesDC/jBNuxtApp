<template>
  <article id="feature">
        <div class="flexWrapper">
          <header class="row">
            <div class="col-xs-7">
                <h2>Google (HTC) Pixel</h2>
                <p>Android 8</p>
            </div>
            <div class="col-xs-2">
              4G LTE
            </div>
            <div class="col-xs-3">
                <time>2015-2016</time>
            </div>
          </header>

          <div class="row">
            <div class="col-xs-3">
              <aside>
              stats
              </aside>
            </div>
            <div class="col-xs-6">
              <figure>
                <img src="../assets/img/opt/google_pixel_400x400.jpg" alt="Google Pixel"/>
              </figure>
            </div>
            <div class="col-xs-3">
              <aside>
                stats
              </aside>
            </div>
          </div>
          <footer class="row">
            <div class="col-xs-3">
              Cause(s) of Death
            </div>
            <div class="col-xs-9">
              Epitath
            </div>
          </footer>
        </div>
    </article>
</template>

<script>

  export default {};

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