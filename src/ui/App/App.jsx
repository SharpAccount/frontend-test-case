import { Provider } from 'react-redux'

import './App.css'
import { store } from '../../store'
import { Header, Cart } from '../components'
import {Products} from "../components/Products";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="main-content">
          <Products />
          <Cart />
        </div>
      </div>
    </Provider>
  )
}

export default App
