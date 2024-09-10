import React from 'react'
import { useSelector } from 'react-redux'

function Nav() {
  let cartCount = useSelector(state => state.cartCount.value) 
  return (
    <div>
      <h1>Number of Items in Cart: {cartCount}</h1>
    </div>
  )
}

export default Nav
