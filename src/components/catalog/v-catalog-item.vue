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
        {{ product_data.price }} <span>₽</span>
      </h3>

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
    }
  },
  methods:{
    addToCart(){
      this.$emit('addToCart',this.product_data);
    }
  },
}
</script>

<style lang="scss">
.v-catalog-item{
}
.actions{
  position: absolute;
  bottom: 20px;
  left:20%;

  &__row{
    font-size: 24px;
    align-items: center;
    .v-btn{
      left:20px;
    }
  }
}
</style>