// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemContainer from './components/ItemContainer/ItemContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Todos Los Productos" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Por Categoria" />}/>
          <Route path='/detail/:productId' element={<ItemContainer/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
