// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemContainer from './components/ItemContainer/ItemContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ItemListContainer greeting="Hola Mundo"/>
        <br></br>
        <br></br>
        <ItemContainer/>
        <br></br>
        <br></br>
       </header>
    </div>
  );
}

export default App;
