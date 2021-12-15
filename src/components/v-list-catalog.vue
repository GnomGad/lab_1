<template>
  <div class="v-list-catalog">
    <v-card
        class="mx-auto"
        :max-width="max_width"
        max-height="420"
        tile
    >
      <v-list rounded>
        <h3>Каталог</h3>
        <v-list-item-group
            color="orange"
            v-model="selectedItem"
            no-action
            sele
        >
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              link
              no-action
              :to="{name:'catalog', params:{title:item.text}}"
          >

            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>

              <v-list-item-title v-text="item.text" ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "v-list-catalog",
  data(){
    return{
      max_width:400,
      selectedItem: 1,
      items: [
        { text: 'Ноутбуки', icon: 'mdi-laptop' },
        { text: 'Телевизоры', icon: 'mdi-television'},
        { text: 'Телефоны', icon: 'mdi-cellphone' },
        { text: 'Клавиатуры', icon: 'mdi-keyboard' },
        { text: 'Мышки', icon: 'mdi-mouse'},
        { text: 'Наушники', icon: 'mdi-headphones'}
      ],
    }
  }
}
</script>

<style scoped>

</style>