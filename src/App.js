import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    
     <NavBar />
     <ItemListContainer name='Luis' />
    
    </div>


  );
}

export default App;
