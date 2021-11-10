<template>
  <v-app  class="app">
    <v-header></v-header>
    <!-- end v-header -->


    <v-main>
      <v-container class="top-container">
        <v-list-catalog></v-list-catalog>
        <v-card
            tile
            max-height="400px"
            min-width="0px"
        >

        <div class="carousel">
          <v-main-carousel />
        </div>
        </v-card>
        <!-- end .top-container -->


      </v-container>
      <v-container class="middle-container">
        <v-catalog></v-catalog>

      </v-container>
      <v-container class="middle-container">
        <v-catalog></v-catalog>

      </v-container>

    </v-main>

    <!-- end v-main -->

    <v-indigo-footer />

  </v-app>
</template>

<script>
import vHeader from './components/v-header';
import vMainCarousel from './components/v-main-carousel';
import vListCatalog from './components/v-list-catalog'
import vCatalog from './components/catalog/v-block-catalog'
import  vIndigoFooter from './components/v-company-footer'

export default {
  name: 'App',

  components: {
    vHeader,
    vMainCarousel,
    vListCatalog,
    vCatalog,
    vIndigoFooter
  },
  data(){
    return {

    }
  },

};
</script>

<style lang="scss">
  .app{
    min-width:350px ;
  }
  .carousel{
    max-width:960px;
  }
  @media screen and (max-width:480px) {
    .carousel{
      display: none;
    }
  }
  .top-container{
    display: flex;
    gap: 20px;
    justify-content: center;
    max-width: 1200px;
    margin-top: 80px;
  }
  .middle-container{
    max-width: 1200px;
    margin-top: 80px;
    padding: 0px;
    margin-bottom: 80px;
  }

</style>
