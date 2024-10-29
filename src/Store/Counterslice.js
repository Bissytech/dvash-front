
import { createSlice } from '@reduxjs/toolkit'


export const countslice = createSlice({
    name: 'count',
    initialState:{
        value:1,
        increase:true,
        thevalue:1

        
        
    },
    reducers:{
        Increment:(state)=>{
            
            if (state.value === 35)
                return
            else{
                state.value += 1
            }

        },
        Decrement:(state)=>{
if (state.value === 0)
    return 
else{state.value -= 1}
        },
       setvalue:(state, action)=>{
state.value = action.payload


       }
   
        
    }
})

export default countslice.reducer
export const {Increment, Decrement, setvalue} = countslice.actions
