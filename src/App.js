// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer';
// import UserFrom from './components/UserForm/UserForm'
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Todos Los Productos" />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Por Categoria" />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            {/* <Route path='/form' element={<UserFrom/>}/> */}
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>

  );
}

export default App;
