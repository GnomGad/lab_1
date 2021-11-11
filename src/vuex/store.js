import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        products: [],
        cart:[]
    },
    mutations:{
        SET_PRODUCTS_TO_STATE: (state, products) =>{
            state.products = products;
        },
        SET_CART: (state, product)=>{

            if(state.cart.length){
                let isExist = false;
                state.cart.map(function (item){
                    if(item.article === product.article){
                        isExist = true;
                        item.quantity++;
                    }
                });
                if(!isExist){
                    product.quantity=1;
                    state.cart.push(product);
                }
            }
            else {
                product.quantity=1;
                state.cart.push(product);
            }
            console.log(state.cart);

        },
        DELETE_FROM_CART: (state, product)=>{
            state.cart.map(function (item, index){
                if(item.article === product.article){
                        item.quantity--;
                    if(product.quantity <1){
                        state.cart.splice(index,1);
                    }
                }
            });

        },
        DECREMENT: (state, index)=>{
            if(state.cart[index].quantity > 1) {
                state.cart[index].quantity--;
            }
        },
        INCREMENT: (state, index)=>{
            state.cart[index].quantity++;
        }
    },
    actions:{
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://178.213.110.121:3000/products',{
                method: 'GET'
            })
                .then((products)=>{
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    console.log(products.data);
                    return products;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },
        INCREMENT_CART_ITEM({commit}, index){
            commit('INCREMENT', index);
        },
        DECREMENT_CART_ITEM({commit}, index){
            commit('DECREMENT', index);
        },
        ADD_TO_CART({commit}, product){
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index){
            commit('DELETE_FROM_CART', index);
        }
    },
    getters:{
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },
})


export default store;