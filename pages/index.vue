<template>
  <section class="grid__wrapper" data-active="grid__wrapper--ACTIVE">

    <feature/>

    <article id="1">
      <figure>
        <img src="../assets/img/opt/kyocera_6035_400x400.jpg" alt="Kyocera 6035"/>
        <figcaption>Kyocera 6035</figcaption>
      </figure>
    </article>

    <article id="2">
      <figure>
        <img src="../assets/img/opt/audiovox_thera_400x400.jpg" alt="Audiovox Thera"/>
        <figcaption>Audiovox Thera</figcaption>
      </figure>
    </article>

    <article id="3">
      <figure>
        <img src="../assets/img/opt/siemens_sx66_400x400.jpg" alt="Siemens sx66"/>
        <figcaption>Siemens sx66</figcaption>
      </figure>
    </article>


    <article id="4">
      <figure>
        <img src="../assets/img/opt/HTC-tytn_400x400.jpg" alt="HTC Titan"/>
        <figcaption>HTC Titan</figcaption>
      </figure>
    </article>

    <article id="5">
      <figure>
        <img src="../assets/img/opt/palm_treo_700p_400x400.jpg" alt="Palm Treo 700p"/>
        <figcaption>Palm Treo 700p</figcaption>
      </figure>
    </article>

    <article id="6">
      <figure>
        <img src="../assets/img/opt/nokia_n93i_400x400.jpg" alt="Nokia n93i"/>
        <figcaption>Nokia n93i</figcaption>
      </figure>
    </article>

    <article id="7">
      <figure>
        <img src="../assets/img/opt/apple_iphone_3G_400x400.jpg" alt="iPhone 3g"/>
        <figcaption>iPhone 3g</figcaption>
      </figure>
    </article>

    <article id="8">
      <figure>
        <img src="../assets/img/opt/palmPre_400x400.jpg" alt="Palm Pre"/>
        <figcaption>Palm Pre</figcaption>
      </figure>
    </article>

    <article id="9">
      <figure>
        <img src="../assets/img/opt/htc_nexus_one_400x400.jpg" alt="Nexus One"/>
        <figcaption>Nexus One</figcaption>
      </figure>
    </article>

    <article id="10">
      <figure>
        <img src="../assets/img/opt/apple_iphone_4s_400x400.jpg" alt="iPhone 4s"/>
        <figcaption>iPhone 4s</figcaption>
      </figure>
    </article>

    <article id="11">
      <figure>
        <img src="../assets/img/opt/motorola_atrix_400x400.jpg" alt="Motorola Atrix 4G"/>
        <figcaption>Motorola Atrix 4G</figcaption>
      </figure>
    </article>

    <article id="12">
      <figure>
        <img src="../assets/img/opt/htc_vivid_400x400.jpg" alt="HTC Vivid"/>
        <figcaption>HTC Vivid</figcaption>
      </figure>
    </article>

    <article id="13">
      <figure>
        <img src="../assets/img/opt/nokia_lumia_920_400x400.jpg" alt="Nokia Lumia 920"/>
        <figcaption>Nokia Lumia 920</figcaption>
      </figure>
    </article>

    <article id="14">
      <figure>
        <img src="../assets/img/opt/lg_nexus_5_400x400.jpg" alt="LG Nexus 5"/>
        <figcaption>LG Nexus 5</figcaption>
      </figure>
    </article>

    <article id="15">
      <figure>
        <img src="../assets/img/opt/samsung_galaxy_s6_edge_400x400.jpg" alt="Samsung Galaxy s6 Edge"/>
        <figcaption>Samsung Galaxy s6 Edge</figcaption>
      </figure>
    </article>

    <article id="16">
      <figure>
        <img src="../assets/img/opt/google_pixel_400x400.jpg" alt="Google Pixel"/>
        <figcaption>Google Pixel</figcaption>
      </figure>
    </article>


    
    
   

  </section>


</template>

<script>  
  import Feature from '~/components/Feature.vue';
  export default {
    components: {Feature}
  }



</script>

<style lang="scss">
article {
  position:relative;
  //display: flex;
  //max-height: 25vh;
  padding: 0;
  &:not(#feature){
    display: grid;
    align-content: center;
  }
  
}

figcaption {
  display: none;
}


.grid__wrapper {
  height: 100vh;
  img {
    //max-width: 100%;
    max-height: 25vh;
  }

  @supports (display: grid){  
      display: grid;

      grid-template-areas: 
          '1 2 3 4'
          '5 6 7 8'
          '9 10 11 12'
          '13 14 15 16'; 
        //grid-template-columns: repeat(4, 25%);
        // @media(max-width:767px){
        //   grid-template-columns: repeat(3, 33%);
        // }
        //align-items: center;
        &[data-active="grid__wrapper--ACTIVE"]{
          grid-template-areas: 
          '1 2 3 4 5'
          '16 feature feature feature 6'
          '15 feature feature feature 7'
          '14 feature feature feature 8'
          '13 12 11 10 9';
          img {
            max-width: 20vw;
            max-height: 20vh;

          }
        }
       #feature {
         grid-area: feature;
         
       }
  }

}



</style>