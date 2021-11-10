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
        :src="require( '../../assets/img/ard.jpg')"
    >
    </v-img>


    <v-card-title>Arduino Leonardo Arduino</v-card-title>
    <v-card-actions>
      <h2
          color="orange"
          text
      >
        $19.9
      </h2>

      <v-btn
          absolute
          fab
          color="orange"
          class="white--text"
          right
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
export default {
  name: "v-catalog-item"
}
</script>

<style lang="scss">
.v-catalog-item{

}
</style>