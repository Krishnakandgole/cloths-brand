import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop.jsx";
import { About, Card, Login, Signup, UserBag } from "./Components/index.js";
import Product from "./Pages/Product.jsx";
import Blog from "./Pages/Blog.jsx";
import Profile from "./Pages/Profile.jsx";
import Order from "./Pages/Order.jsx";
import UserProfile from "./Pages/userProfile.jsx";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/FirebaseAuth.js';


function App() {
  // Add to cart functionality
  const [items, setItems] = useState([]);
  const [userName, setUsername] = useState("")
  const [isLogin, setIsLogin] = useState(false);

  const AddToCart = (product) => {
    const findItem = items.find((item) => item.id === product.id);
    if (findItem) {
      const updateCart = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setItems(updateCart);
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
    }
  };

  // Add to watch list
  const watchList = (product) => {
    setItems([...items, { ...product, quantity: 1 }]);
    alert(`${product.name} added to watchlist.`);
  };

  // Increase product quantity
  const handleInc = (id) => {
    setItems(items.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Decrease product quantity
  const handleDec = (id) => {
    setItems(items.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  // Total cost calculation
  const totalCost = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Remove item from cart
  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // User login name checking for the current user

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName)
        // setUserlogin(true)
      } else {
        setUsername(" ")
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout userName={userName} />}>
          <Route index element={isLogin ? <Home /> : <Navigate to="/login" />} />
          <Route path="/shop" element={isLogin ? <Shop AddToCart={AddToCart} watchList={watchList} /> : <Navigate to="/login" />} />
          <Route path="/about" element={isLogin ? <About /> : <Navigate to="/login" />} />
          <Route path="/product" element={isLogin ? <Product /> : <Navigate to="/login" />} />
          <Route path="/blog" element={isLogin ? <Blog /> : <Navigate to="/login" />} />

          {/* Profile Page with Nested Routes */}
          <Route path="/profile" element={isLogin ? <Profile /> : <Navigate to="/login" />}>
            <Route path="/profile/order" element={isLogin ? <Order /> : <Navigate to="/login" />} />
            <Route path="/profile/userprofile" element={isLogin ? <UserProfile /> : <Navigate to="/login" />} />
            <Route path="/profile/userbag" element={isLogin ? <UserBag items={items} handleRemove={handleRemove} /> :  <Navigate to="/login" />} />
            <Route
              path="/profile/cart"
              element={isLogin ? <Card items={items} handleRemove={handleRemove} handleInc={handleInc} handleDec={handleDec} totalCost={totalCost}  /> : <Navigate to="/login" />}
            />
          </Route>
          <Route path="/login" element={<Login  setIsLogin={setIsLogin}/>} />
          <Route path="/signup" element={<Signup />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
