<template>
<div class="v-cart ">
  <div class="container middle-container">
    <h2
        v-if="!CART.length"
    >Пуская корзина...
    </h2>
    <h2
        v-else
    >Стоимость корзины {{cartTotalCost}} <span>₽</span>
      <v-dialog
          v-model="dialog"
          width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="orange"
              v-bind="attrs"
              v-on="on"
          >
            <h3>
            Оплатить
            </h3>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 orange">
            <h2>Заказ на сумму {{cartTotalCost}} <span>₽</span></h2>
          </v-card-title>

          <v-card-text>
            <v-container>

              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Имя"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Отчество"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Phone"
                      required
                  ></v-text-field>
                </v-col>

              </v-row>
            </v-container>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="orange"
                text
                @click="dialog = false"
            >
              <h3>Заказать</h3>

            </v-btn>
            <v-btn
                color="red"
                text
                @click="dialog = false"
            >
              <h3>Назад</h3>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </h2>
  </div>
  <div class="container middle-container">
    <v-block-catalog
    :products="CART"
    :is_quantity="true"
    />
  </div>




</div>
</template>

<script>
import  {mapActions, mapGetters} from 'vuex'
import vBlockCatalog from '../catalog/v-block-catalog'
export default {
  name: "v-cart",
  components:{
    vBlockCatalog
  },
  data(){
    return{
      dialog: false,
    }
  },
  computed: {
    ...mapGetters([
          'CART'
        ]
    ),
    cartTotalCost(){
      let result = [];
      if(this.CART.length){
        for (let item of this.CART){
          result.push(item.price * item.quantity);
        }

        result = result.reduce((sum,el)=>{
          return sum + el;
        })
      }
      else {
        return 0;
      }

      return result;
    }
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART', 'INCREMENT_CART_ITEM','DECREMENT_CART_ITEM']),
    deleteFromCart(index){
      this.DELETE_FROM_CART(index);
    },
    increment(index){
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    }
  }
}
</script>

<style lang="scss">
.v-cart{
  h2{
    font-size: 40px;
    text-align: center;
  }
}
</style>