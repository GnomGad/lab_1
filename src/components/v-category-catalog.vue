<template>
  <div class="v-category-catalog">
    <div class="container middle-container">
      <h2>{{title}}</h2>
      <v-block-catalog
          :products="filteredCatalog"
      />
    </div>
  </div>
</template>

<script>
import vBlockCatalog from './catalog/v-block-catalog'
import {mapGetters} from "vuex";

export default {
  name: "v-category-catalog",
  components:{
    vBlockCatalog
  },
  data(){
    return{
      filtered_products:[],
    }
  },
  props:{
    title:{
      type:String,
      default() {
        return 'Каталог';
      }
    }
  },
  methods:{

  },
  computed: {
    ...mapGetters([
          'PRODUCTS'
        ]
    ),
    filteredCatalog(){
      let tmp = [];
      this.PRODUCTS.forEach((el)=>{
        if(el.category === this.title.toLowerCase()){
          tmp.push(el)
        }
      })
        return tmp;
    }
  },
  mounted() {

    this.filtered_products = [];
  }
}
</script>

<style lang="scss">
.v-category-catalog{
  h2{
    font-size: 32px;
    text-align: center;
  }
}
</style>