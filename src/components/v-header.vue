<template>
  <div class="v-header">
      <v-app-bar
          color="orange"
          dark
          fixed
      >
        <v-app-bar-nav-icon
            @click="drawer = true"
        >
        </v-app-bar-nav-icon>
        <v-toolbar-title>
          Device shop
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-badge
              color="green"
              :content="products_count"
              overlap
              v-if="products_count"
          >
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </v-app-bar>
    <header>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
    >
      <v-card class="nav">
      <v-list
          nav
          dense
          rounded
      >
        <h3>Навигация</h3>
        <v-list-item-group
            v-model="group"
            active-class="orange--text"
        >
          <v-list-item v-if="products_count">
            <v-list-item-icon>
              <v-btn icon>
                <v-badge
                    color="green"
                    :content="products_count"
                    overlap
                >
                  <v-icon>mdi-cart</v-icon>
                </v-badge>
              </v-btn>
            </v-list-item-icon>
            <v-list-item-title>Корзина</v-list-item-title>
          </v-list-item>

          <v-list-item
              v-for="item in items"
              :key="item.title"
              link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list>
      </v-card>
      <v-list-catalog></v-list-catalog>

    </v-navigation-drawer>
      </header>
  </div>
</template>

<script>
import vListCatalog from './v-list-catalog'

export default {
  name: "v-header",
  props:{
    products_count:{
      type: Number,
      default(){
        return 0;
      }
    }
  },
  components:{
    vListCatalog
  },
  data(){
    return{
      drawer: false,
      group: null,

      items: [
        { title: 'Главная', icon: 'mdi-home' },
      ],
    }
  }
}
</script>

<style scoped>
.v-header{
}
.nav {
  margin-bottom: 40px;
}
</style>