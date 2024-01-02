import {configureStore} from '@reduxjs/toolkit'
import bubbleReducer from '../Redux/bubbleSlice'

export const store = configureStore({
    reducer: {
        bubble: bubbleReducer,
      },
    })