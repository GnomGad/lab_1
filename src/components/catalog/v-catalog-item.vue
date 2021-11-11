<template>
<div class="v-catalog-item">
  <v-card
      class="mx-auto"
      max-width="230"
      height="350"
  >

    <v-img
        class="white--text align-end"
        height="150px"
        :src="require( '../../assets/img/' + product_data.image)"
    >
    </v-img>


    <v-card-title>{{ product_data.name }}</v-card-title>
    <v-card-actions class="actions"
    >
      <v-row
          class="actions__row"
      >
      <h3
          color="orange"
          text
      >
        {{ product_data.price }} <span>₽ </span>
      </h3>
        <h6
            v-if="is_quantity">
          <span
          > x {{product_data.quantity}}

          </span>

        </h6>

      <v-btn
          small
          fab
          color="orange"
          class="white--text"
          @click="addToCart"
          v-if="!is_quantity"
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-row
      v-else>
        <v-btn
            small
            fab
            color="red"
            class="white--text"
            @click="deleteFromCart"

        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn
            small
            fab
            color="orange"
            class="white--text"
            @click="addToCart"
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-row>
      </v-row>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props:{
    product_data:{
      type: Object,
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
  methods:{
    addToCart(){
      this.$emit('addToCart',this.product_data);
    },
    deleteFromCart(){
      this.$emit('deleteFromCart',this.product_data);
    }
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1);
  }
}
</script>

<style lang="scss">
.v-catalog-item{
}
.actions{
  position: absolute;
  bottom: 20px;
  left:20px;

  &__row{
    font-size: 24px;
    align-items: center;
    .v-btn{
      left:20px;
    }
  }

}
.small-button{
  font-size: 10px;
}
</style>