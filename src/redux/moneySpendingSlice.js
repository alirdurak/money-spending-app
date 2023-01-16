import { createSlice } from "@reduxjs/toolkit"; 
import { items } from "../items";

export const moneySpendingSlice = createSlice({
    name:"moneySpending",
    initialState:{
        productItems: items,
        totalMoney: 100000000000,
        startingMoney:100000000000,
       
        

    },
    reducers:{  
        countChange: (state, action) => {
            const {count, id} = action.payload;
            const product = state.productItems.find(product => product.id ===id)
            product.count = count
            
            let spended = 0
            state.productItems.forEach((item)=> spended += Number(item.count) * Number(item.cost))

            state.totalMoney = Number(state.startingMoney) - Number(spended) 

            
        },

      

    }
}   
) 
export const {countChange,addingItems} = moneySpendingSlice.actions;

export default moneySpendingSlice.reducer