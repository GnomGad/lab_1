<template>
<div class="v-page-item">
  <div class="container middle-container" align="center">
      <h3>{{product_data.name}}</h3>
    <v-card max-width="300" >
    <v-img
        max-width="300"
        :src="require( '../assets/img/' + product_data.image)"
    ></v-img>
    </v-card>
    <v-card class="list-content" align="center">
    <div >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Разрешение экрана</v-list-item-title>
          <v-list-item-subtitle>2400x1080</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Диагональ</v-list-item-title>
          <v-list-item-subtitle>6.43</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Модель процессора</v-list-item-title>
          <v-list-item-subtitle>Qualcomm Snapdragon 778G</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Объем оперативной памяти</v-list-item-title>
          <v-list-item-subtitle>8 ГБ</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Объем встроенной памяти</v-list-item-title>
          <v-list-item-subtitle>256 ГБ</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

    </div>
    </v-card>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "v-page-item",
  props:{
    title:{
      type:String,
      default() {
        return 'Каталог';
      }
    },
    product_data:{
      type:Object,
      default() {
        return {};
      }
    },
    mounted(){
      axios('http://178.213.110.121:3000/products')
    }
  },
}
</script>

<style lang="scss">
.v-page-item{
  h3{
    text-align: center;
    font-size: 48px;
  }
  .xx{
    display:flex;
    align-items: start;
    flex-direction: row;

  }

}
</style>