import { configureStore } from '@reduxjs/toolkit'
import counterreducer from './Counter'

export const store = configureStore({
  reducer: {
    counter:counterreducer
  },
})