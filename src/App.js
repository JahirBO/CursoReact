
import './App.css';
import {BrowserRouter, Routes,Route}from "react-router-dom";
import Encabezado from './components/Encabezado';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import PromocionApp from './components/PromocionApp';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="container-fluid">
            <BrowserRouter>
              <Encabezado/>
              <Routes>
                <Route path={"/"} element={<ItemListContainer />} />
                <Route path={"/category/:id"} element={<ItemListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                <Route path={"*" }element={<Error404 />} />
              </Routes>
              <PromocionApp/>
              <Footer/>
            </BrowserRouter>

    </div>
  );
}

export default App;
