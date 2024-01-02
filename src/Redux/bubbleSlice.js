import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  array:[],
}

export const bubbleSlice = createSlice({
  name: 'bubble',
  initialState,
  reducers: {
        setinputarray: (state,action)=>{
            state.array=action.payload
        }
  },
})


export const {setinputarray} = bubbleSlice.actions

export default bubbleSlice.reducer