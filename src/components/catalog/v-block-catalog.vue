<template>
  <div class="v-block-catalog">
    <v-catalog-item
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        :is_quantity="is_quantity"
        @addToCart="addToCart"
        @deleteFromCart="deleteFromCart"
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
    },
    is_quantity:{
      type: Boolean,
      default(){
        return false;
      }
    },
  },
  components:{
    vCatalogItem
  },
  methods:{
    ...mapActions([
      'ADD_TO_CART',
        'DELETE_FROM_CART'
    ]),
    addToCart(data){
      this.ADD_TO_CART(data);
    },
    deleteFromCart(data){
      this.DELETE_FROM_CART(data);
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