import { createSlice } from "@reduxjs/toolkit"; 
import { items } from "../items";

export const moneySpendingSlice = createSlice({
    name:"moneySpending",
    initialState:{
        productItems: items,
        totalMoney: 100000000000,
        

    },
    reducers:{
        countChange: (state, action) => {
            const {count, id} = action.payload;
            const product = state.productItems.find(product => product.id ===id)
            product.count = count
        }
    }
}   
) 
export const {countChange} = moneySpendingSlice.actions;

export default moneySpendingSlice.reducer