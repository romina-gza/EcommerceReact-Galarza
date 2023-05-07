import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './Context/CartContext.jsx'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider> 
        <div className="App">
          <NavBar />
            <Routes>
              <Route path='/' element={ <ItemListContainer greeting={'Bienvenidos'} /> }>            
              </Route>
              <Route path='/category/:section' element={ <ItemListContainer greeting={'Bienvenidos'} /> }>            
              </Route>
              <Route path='/detail/:idprod' element={ <ItemDetailContainer /> }>
              </Route>
              <Route path='/cart' element={ <Cart /> }>
              </Route>
              <Route path='/checkout' element={ <Checkout /> }>
              </Route>

              <Route path='*' element={ <Navigate to='/' ></Navigate> }>
              </Route>
            </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>

  )
}

export default App
