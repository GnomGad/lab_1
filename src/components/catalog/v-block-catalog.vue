<template>
  <div class="v-block-catalog">
    <v-catalog-item
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
    />

  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-block-catalog",
  props:{
    products:{
      type:Array,
      default(){
        return {}
      }
    }
  },
  components:{
    vCatalogItem
  },
  methods:{
    ...mapActions([
      'ADD_TO_CART'
    ]),
    addToCart(data){
      this.ADD_TO_CART(data);
    }
  },
  computed: {
    ...mapGetters([
          'CART'
        ]
    ),
  },

}
</script>

<style lang="scss">
  .v-block-catalog{
    display: flex;
    column-gap: 12px;
    row-gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>