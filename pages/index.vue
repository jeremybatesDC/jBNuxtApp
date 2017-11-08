<template>
  <section class="grid__wrapper">
   
    <article>
      <figure>
        <img src="../assets/img/opt/kyocera_6035_400x400.jpg" alt="Kyocera 6035"/>
        <figcaption>Kyocera 6035</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/audiovox_thera_400x400.jpg" alt="Audiovox Thera"/>
        <figcaption>Audiovox Thera</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/siemens_sx66_400x400.jpg" alt="Siemens sx66"/>
        <figcaption>Siemens sx66</figcaption>
      </figure>
    </article>


    <article>
      <figure>
        <img src="../assets/img/opt/HTC-tytn_400x400.jpg" alt="HTC Titan"/>
        <figcaption>HTC Titan</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/palm_treo_700p_400x400.jpg" alt="Palm Treo 700p"/>
        <figcaption>Palm Treo 700p</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/nokia_n93i_400x400.jpg" alt="Nokia n93i"/>
        <figcaption>Nokia n93i</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/apple_iphone_3G_400x400.jpg" alt="iPhone 3g"/>
        <figcaption>iPhone 3g</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/palmPre_400x400.jpg" alt="Palm Pre"/>
        <figcaption>Palm Pre</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/htc_nexus_one_400x400.jpg" alt="Nexus One"/>
        <figcaption>Nexus One</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/apple_iphone_4s_400x400.jpg" alt="iPhone 4s"/>
        <figcaption>iPhone 4s</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/motorola_atrix_400x400.jpg" alt="Motorola Atrix 4G"/>
        <figcaption>Motorola Atrix 4G</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/htc_vivid_400x400.jpg" alt="HTC Vivid"/>
        <figcaption>HTC Vivid</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/nokia_lumia_920_400x400.jpg" alt="Nokia Lumia 920"/>
        <figcaption>Nokia Lumia 920</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/lg_nexus_5_400x400.jpg" alt="LG Nexus 5"/>
        <figcaption>LG Nexus 5</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/samsung_galaxy_s6_edge_400x400.jpg" alt="Samsung Galaxy s6 Edge"/>
        <figcaption>Samsung Galaxy s6 Edge</figcaption>
      </figure>
    </article>

    <article>
      <figure>
        <img src="../assets/img/opt/google_pixel_400x400.jpg" alt="Google Pixel"/>
        <figcaption>Google Pixel</figcaption>
      </figure>
    </article>


  </section>
</template>

<script>  

  export default {
  }
</script>

<style lang="scss" scoped>
article {
  position:relative;
  display: flex;
  //max-height: 25vh;
  padding: 1vh 1vw;
}

figcaption {
  display: none;
}

img {
    max-width: calc(23vw);
   max-height: calc(23vh);
}

.grid__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  @supports (display: grid){  
      display: grid;
      grid-template-areas: 
          'r1c1 r1c2 r1c3 r1c4'
          'r1c5 r1c6 r1c7 r1c8'
          'r1c9 r1c10 r1c11 r1c12'
          'r1c13 r1c14 r1c15 r1c16'; 
      }

}
</style>