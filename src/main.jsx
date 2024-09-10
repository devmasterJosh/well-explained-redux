// Importing necessary modules from React and ReactDOM
import { StrictMode } from 'react'
// StrictMode is a tool that helps highlight potential problems in your app during development.
import { createRoot } from 'react-dom/client' 
// 'createRoot' is used to render the React app into the root HTML element (usually with the ID 'root').

import App from './App.jsx' 
// Importing the main App component, which is the entry point of our React application.

import './index.css' 
// Importing the CSS file for styling the application.

import { configureStore } from '@reduxjs/toolkit'; 
// Importing 'configureStore' from Redux Toolkit to create a global state store for managing app-wide data.

import { Provider } from 'react-redux'; 
// The 'Provider' component makes the Redux store available to the entire app, allowing components to access and dispatch actions to the store.

import cartCountReducer from './redux/cartCountSlice.js'; 
// Importing the reducer (cartCountReducer) from our cartCountSlice file.
// This reducer will manage the state related to the cart count.

// Creating the Redux store. 
// The 'store' is where all the app's global state is stored. We configure it with a reducer, in this case, 'cartCount'.
// The 'cartCount' reducer will be responsible for handling actions related to cart counting.
const store = configureStore({
  reducer: {
    cartCount: cartCountReducer // Connecting the cartCountReducer to the store.
  }
})

// Rendering the React app into the 'root' HTML element.
// We're wrapping the entire app with the 'Provider' component, passing in the store we created.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* The Provider makes the Redux store available to all components inside App */}
    <Provider store={store}> 
      <App /> {/* App component is the main entry point of our application */}
    </Provider>
  </StrictMode>,
)
