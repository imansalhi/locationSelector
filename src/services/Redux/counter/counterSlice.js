import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Attention:this file is just an example for testing redux infra
export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += action.payload
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer