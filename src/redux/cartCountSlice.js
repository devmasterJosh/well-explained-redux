// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

// const cartCountSlice = createSlice({
//   name: "cartCount",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value +=1;
//     },
//     decrement: (state) => {
//       state.value -=1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const {increment,decrement,incrementByAmount} = cartCountSlice.actions
// export default cartCountSlice.reducer


// Importing the 'createSlice' function from Redux Toolkit
// Redux Toolkit is a library that helps us easily manage global state in our app.
import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state of our slice (a piece of global state).
// Here, we have one piece of state called 'value' and it starts at 0.
const initialState = {
  value: 0,
};

// Creating a slice for 'cartCount' using createSlice.
// A slice is like a part of the state that handles specific data and actions related to it.
const cartCountSlice = createSlice({
  // Giving the slice a name so we can refer to it later. Here it's called 'cartCount'.
  name: "cartCount",

  // Setting the initial state of this slice to the initialState we defined above.
  initialState,

  // Defining the actions that can change (or mutate) the state.
  reducers: {
    // 'increment' is an action that increases the value by 1.
    // Whenever this action is called, it updates the state by adding 1 to 'value'.
    increment: (state) => {
      state.value += 1;  // This directly changes the 'value' in our state.
    },

    // 'decrement' is an action that decreases the value by 1.
    // When this action is called, it subtracts 1 from 'value'.
    decrement: (state) => {
      state.value -= 1;  // This directly changes the 'value' in our state.
    },

    // 'incrementByAmount' is an action that allows us to increase the value by a specific number.
    // This action expects a number to be passed in (called 'action.payload') and sets 'value' to that number.
    incrementByAmount: (state, action) => {
      state.value = action.payload;  // 'action.payload' holds the number we pass in.
    },
  },
});

// Exporting the actions (increment, decrement, incrementByAmount) so we can use them in other parts of our app.
// These actions are what we dispatch to change the state.
export const { increment, decrement, incrementByAmount } = cartCountSlice.actions;

// Exporting the reducer function, which will be used to update the state in our store.
// The reducer listens for the actions and knows how to change the state based on them.
export default cartCountSlice.reducer;
