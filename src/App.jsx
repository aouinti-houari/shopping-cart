import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Loading from './components/Loading'
import Men from "./components/Men"
import Women from './components/Women'
import Jewelry from './components/Jewelry'
import Shop from './components/Shop'

const Content = React.lazy(() => import("./components/Content"));

function App() {
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilterProducts] = useState(productData);
  const [numItems, setNumItems] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const result = await fetch('https://fakestoreapi.com/products');
        const data = await result.json();
        const products = data.filter(product => product.category !== "electronics");
        setProductData(products);
        setFilterProducts(products);
        console.log(products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchProducts();
  }, []);

  const handleSetNumItems = (element) => {
    if (!numItems.includes(element)) setNumItems([...numItems, element]);
  };

  return (
    <Router>
      <Header
        onFilteredProducts={filteredProducts}
        onSetFilterProducts={setFilterProducts}
        onNumItems={numItems}
        productData={productData}
      />
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<Loading />}>
            <Content onSetNumItems={handleSetNumItems} productData={filteredProducts} />
          </React.Suspense>
        }
        />
        <Route path='/home' element={<Content onSetNumItems={handleSetNumItems} productData={filteredProducts} />} />
        <Route path='/men' element={<Men onSetNumItems={handleSetNumItems} productData={filteredProducts} />} />
        <Route path='/women' element={<Women onSetNumItems={handleSetNumItems} productData={filteredProducts} />} />
        <Route path='/jewelry' element={<Jewelry onSetNumItems={handleSetNumItems} productData={filteredProducts} />} />
        <Route path='/shop' element={<Shop onNumItems={numItems} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
