import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CounterEmptyState} from '../models/counter';

const counterSlice = createSlice({
  name: 'counter',
  initialState: CounterEmptyState,
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    reset: state => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = CounterEmptyState;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
