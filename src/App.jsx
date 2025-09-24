import React, { useState, useEffect } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { store, setProducts, setUser, setLoading } from './store/store'

import './App.css'
import { Header, ProductList, Cart } from './components'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="main-content">
          <ProductList />
          <Cart />
        </div>
      </div>
    </Provider>
  )
}

export default App
