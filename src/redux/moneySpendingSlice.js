import { createSlice } from "@reduxjs/toolkit"; 
import { items } from "../items";

export const moneySpendingSlice = createSlice({
    name:"moneySpending",
    initialState:{
        productItems: items,
        totalMoney: 100000000000,
        startingMoney:100000000000,
        receiptItems:[]
        

    },
    reducers:{
        countChange: (state, action) => {
            const {count, id} = action.payload;
            const product = state.productItems.find(product => product.id ===id)
            product.count = count
            
            
        },

        addingItems: (state ,action) => {
            const filtered = state.productItems.filter(item => item.count > 0)
            state.receiptItems = filtered;

            const spended = filtered.map(item => item.count * item.cost)

            state.totalMoney = state.startingMoney - spended 

        }


    }
}   
) 
export const {countChange,addingItems} = moneySpendingSlice.actions;

export default moneySpendingSlice.reducer