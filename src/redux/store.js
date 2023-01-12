import { configureStore } from "@reduxjs/toolkit";
import moneySpendingSlice from "./moneySpendingSlice";
 
export const store = configureStore({
    reducer:{
        moneySpending: moneySpendingSlice,
    },
}

)