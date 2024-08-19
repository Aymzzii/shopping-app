import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/product/productSlice"
import cardReducer from "../features/cart/cardSlice";

const store = configureStore({
    reducer:{
        product: productsReducer,
        card: cardReducer,
    },
});

export default store;

