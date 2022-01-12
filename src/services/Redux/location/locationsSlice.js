import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: Object[]
}

const initialState: CounterState = {
  value: [],
}

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    addLoction: (state, action) => {
      let scop = [...state.value]
      scop.push(action.payload)
      state.value = scop
    },
  },
})

// Action creators are generated for each case reducer function
export const { addLoction } = locationsSlice.actions

export default locationsSlice.reducer