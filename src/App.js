import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ProductDetail } from './components/ProductDetail';
import { ProductIndex } from './components/ProductIndex';
import { Products } from './components/Products';

function NotFound(){
  return(
    <div>
      <h2>Page Not Found</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App-header">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='products' element={<Products />}>
          <Route path='' element={<ProductIndex />}></Route>
          <Route path=':productId' element={<ProductDetail />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
