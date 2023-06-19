import Navbar from './components/Navbar';
import './App.css';
import Product from './components/Product';
function App() {
  return (
    <div >
     <Navbar/>
     <hr style={{color:"gray"}}/>
     
     <Product />
    </div>
  );
}

export default App;
