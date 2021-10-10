import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  follow: 0,
}

export const followSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {
       // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    increseFollow: (state) => {
      state.follow += 1
    },
    decreseFollow: (state) => {
      state.follow -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increseFollow, decreseFollow} = followSlice.actions

export default followSlice.reducer