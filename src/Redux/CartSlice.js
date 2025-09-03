import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
          addItem:(state , action)=>{
            //state.push(action.payload)
            let existingItem = state.find((item) =>item.id ===action.payload.id)
            if(!existingItem){
                state.push(action.payload)
            }
            else{
                existingItem.quantity++;
            }
          }
    }
})
export default cartSlice.reducer
export const{addItem} = cartSlice.actions