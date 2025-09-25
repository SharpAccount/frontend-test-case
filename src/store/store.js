import { configureStore } from '@reduxjs/toolkit'

import {
  cartReducer,
  productReducer,
  userReducer
} from  './slices'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer
  }
})

