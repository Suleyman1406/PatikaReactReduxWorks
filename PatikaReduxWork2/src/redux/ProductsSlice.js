import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {arr} from '../productList'


export const productsSlice = createSlice({
  name: 'products',
  initialState:{
      products:arr,
      money:187000000000,
  },
  reducers: {
      buyProduct:(state,action)=>{
        state.products[action.payload].countInCart++;
        state.money-= state.products[action.payload].price;
      },
      sellProduct:(state,action)=>{
        state.products[action.payload].countInCart--; 
        state.money+= state.products[action.payload].price;

      },
      changeCount:(state,action)=>{
        let product=state.products[action.payload.id];
        state.money+=product.countInCart*product.price;
        product.countInCart=action.payload.count; 
        state.money-=product.countInCart*product.price;
      },
     
  },
})

export const { buyProduct,sellProduct,changeCount } = productsSlice.actions

export default productsSlice.reducer

