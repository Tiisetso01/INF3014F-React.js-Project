import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux
import { Provider } from "react-redux";
//import store from "./redux/store";
import {configureStore} from "@reduxjs/toolkit"
import shopReducer from './redux/Shopping/shopping-reducer';
import wishlistReducer from './redux/WishList/wishlist-reducer';

// const store = configureStore({
//   reducer:{
//     cart: shopReducer
//   }
// })
const store = configureStore(
  {
    reducer:{
      cartList: shopReducer,
      wishList: wishlistReducer
    } 
  }
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
