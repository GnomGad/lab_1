<template>
  <div class="v-block-catalog">
    <v-catalog-item />
    <v-catalog-item />
    <v-catalog-item />
    <v-catalog-item />
    <v-catalog-item />
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
export default {
  name: "v-block-catalog",
  components:{
    vCatalogItem
  }
}
</script>

<style lang="scss">
  .v-block-catalog{
    display: flex;
    column-gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>