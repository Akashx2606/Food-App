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
          },
           removeitem:(state,action)=>{
                let existingItem = state.find((item)=>item.id === action.payload.id);
                if(existingItem){
                    if(existingItem.quantity > 1){
                        existingItem.quantity--;
                    }
                    //delete
                    else{
                        return state.filter((item)=>item.id !== action.payload.id);
                    }
                }
            }
    }
})
export default cartSlice.reducer
export const{addItem , removeitem} = cartSlice.actions