
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage'
import About from './components/About'
import Contact from './components/Contact'
// import Services from './components/Services'
import Register from './components/Register';
import Login from './components/Login';
import ProductListPage from './pages/productList';
import ProductDetailsPage from './pages/productDetails';
import CartListPage from './pages/cartList';
import { Fragment } from 'react';
function App() {

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/service" element={<Services />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/products' element={<ProductListPage/>} />
        <Route path='/product-details/:id' element={<ProductDetailsPage/>} />
        <Route path='/cart' element={<CartListPage/>} />
      </Routes>
    </Fragment>
  )
}

export default App
