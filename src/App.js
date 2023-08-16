import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Dashboard  from './pages/Dashboard';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Calculator from './pages/Calculator';
const App=()=> {
  return (
    <div>
 <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="/analaytics" element={<Analytics />} />
          <Route path="/comment" element={<Comment/>}/>
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
