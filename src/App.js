import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './pages/ItemListContainer//ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    
      <BrowserRouter >
    <NavBar/> 
    <Routes>
      <Route path ='/'element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path ="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/category/:categoryId/:productId" element={<ItemDetailContainer />} />
      <Route path= '*' element={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
