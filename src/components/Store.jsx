// Importing necessary hooks and actions from React and Redux
import React, { useState } from 'react'
import { useDispatch } from 'react-redux' 
// useDispatch is a hook that allows us to dispatch actions to change the Redux state.
import { incrementByAmount, decrement, increment } from '../redux/cartCountSlice'
// Importing the actions we defined in our cartCountSlice. These actions will update the cart count.

// Defining the Store component
function Store() {
  // We are using useState to handle local state for the input field value.
  // 'incrementAmount' stores the value entered by the user, and 'setIncrementAmmonut' is used to update that value.
  const [ incrementAmount, setIncrementAmmonut ] = useState()

  // Setting up 'dispatch' to use within the component. It allows us to trigger actions to change the state.
  let dispatch = useDispatch()

  return (
    <div>
      {/* Button to increase the cart count by 1. When clicked, it dispatches the 'increment' action. */}
      <button onClick={() => dispatch(increment())}>+</button>
      
      {/* Placeholder for showing the current cart count.
          Since you're not getting the value from Redux yet, this is currently empty. */}
      <h1>{}</h1>
      
      {/* Button to decrease the cart count by 1. When clicked, it dispatches the 'decrement' action. */}
      <button onClick={() => dispatch(decrement())}>-</button>
      
      {/* Input field to accept a custom number from the user.
          We use 'setIncrementAmmonut' to update the 'incrementAmount' state when the input changes. */}
      <input onChange={(e) => setIncrementAmmonut(parseInt(e.target.value))} />
      
      {/* Button to increase the cart count by the custom number entered by the user.
          It dispatches the 'incrementByAmount' action with 'incrementAmount' as the value. */}
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>add to cart</button>
    </div>
  )
}

export default Store
