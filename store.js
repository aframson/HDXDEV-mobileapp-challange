import { configureStore } from '@reduxjs/toolkit'

import followReducer from './slices/followCounter'

export const store = configureStore({
  reducer: {
      followCount: followReducer
  },
})