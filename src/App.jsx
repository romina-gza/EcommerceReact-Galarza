import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting={'Bienvenidos'} /> }>            
          </Route>
          <Route path='/category/:section' element={ <ItemListContainer greeting={'Bienvenidos'} /> }>            
          </Route>
          <Route path='/detail/:idprod' element={ <ItemDetailContainer /> }>
          </Route>
          <Route path='*' element={ <Navigate to='/' ></Navigate> }>
          </Route>
        </Routes>
    </div>
  
    </BrowserRouter>
  )
}

export default App
