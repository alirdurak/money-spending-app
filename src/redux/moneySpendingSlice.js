import { createSlice } from "@reduxjs/toolkit"; 

export const moneySpendingSlice = createSlice({
    name:"moneySpending",
    initialState:{
        totalMoney: 100000000000,
        

    },
    reducers:{}
}   
) 

export default moneySpendingSlice.reducer