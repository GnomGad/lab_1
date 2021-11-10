<template>
  <div class="v-main-carousel">
      <v-carousel
          :height="carousel_height"
      >
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"

        >
        <v-img :height="carousel_height" :src="require( '../assets/img/'+item.src)"></v-img>
        </v-carousel-item>
    </v-carousel>

  </div>
</template>

<script>
export default {
  name: "v-main-carousel",
  data () {
    return {
      carousel_height:420,
      items: [
        {
          src: 'c1.jpg',
        },
        {
          src: 'c2.jpg',
        },
        {
          src: 'c3.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.v-main-carousel{
  height: 200px;

}
</style>