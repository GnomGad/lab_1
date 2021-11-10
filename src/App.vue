<template>
  <v-app  class="app">
    <v-header></v-header>
    <!-- end v-header -->


    <v-main>
      <v-container class="top-container">
        <v-list-catalog></v-list-catalog>
        <v-card
            tile
            height="400px"
            width="100%"
        >

        <div class="carousel">
          <v-main-carousel />
        </div>
        </v-card>
        <!-- end .top-container -->


      </v-container>
      <v-container class="middle-container">
        <div class="carousel">
          <v-main-carousel />
        </div>
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
import  vIndigoFooter from './components/v-company-footer'

export default {
  name: 'App',

  components: {
    vHeader,
    vMainCarousel,
    vListCatalog,
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
    width: 100%;
  }
  .top-container{
    display: flex;
    gap: 20px;
    justify-content: center;
    max-width: 1200px;
    margin-top: 80px;
  }

</style>
