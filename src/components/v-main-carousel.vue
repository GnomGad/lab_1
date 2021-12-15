<template>
  <div class="v-main-carousel">
      <v-carousel
          :height="carousel_height"
      >
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"

        >
        <v-img :height="carousel_height" :src="require( '../assets/img/'+item.name)"></v-img>
        </v-carousel-item>
    </v-carousel>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "v-main-carousel",
  data () {
    return {
      carousel_height:420,
      items: [
      ],
    }
  },
  mounted() {
    axios(process.env.VUE_APP_BACKEND+'/slider_photos',{
      method: 'GET'
    })
    .then((slides)=>{
       this.items = slides.data;
        console.log(slides.data);
        return slides;
      })
          .catch((error)=>{
            console.log(error);
            return error;
          })
  }
}
</script>

<style lang="scss">
.v-main-carousel{
  height: 200px;

}
</style>