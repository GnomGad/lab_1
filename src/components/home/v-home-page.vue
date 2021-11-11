<template>
<div class="v-home-page">
  <v-container class="middle-container">
    <v-card>
      <h2 class="orange darken-4  text-center white--text">
        Лучшая цена
      </h2>
    </v-card>
    <v-block-catalog
        :products="low_price"
    />

  </v-container>
  <v-container class="middle-container">
    <v-card>
      <h2 class="orange darken-4  text-center white--text">
        Популярно
      </h2>
    </v-card>
    <v-block-catalog
        :products="popular"
    />

  </v-container>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import vBlockCatalog from '../catalog/v-block-catalog'
export default {
  name: "v-home-page",
  components:{
    vBlockCatalog,
  },
  data(){
    return {
      low_price:[],
      popular:[],
    }
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
    ]),
  },
  computed: {
    ...mapGetters([
          'PRODUCTS',
          'CART'
        ]
    ),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((res)=>{
          if(res.data) {
            this.low_price = res.data.slice(0,5);
            this.popular = res.data.slice(5,10);
            console.log(this.low_price);
            console.log(this.popular);
          }
        })
  },

}
</script>

<style scoped>

</style>