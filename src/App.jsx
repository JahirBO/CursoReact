
import './App.css';
import Encabezado from './components/Encabezado';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Producto from './components/Producto';
import PromocionApp from './components/PromocionApp';

function App() {
  return (
    <div className="container-fluid">
            <Encabezado/>
            <ItemListContainer greeting={"No se encontraron Productos!"} />
            <Producto/>
            <Footer/>
    </div>
  );
}

export default App;
