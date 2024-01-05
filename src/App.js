import React, { useState } from 'react';
import ProductList from './Component/productList'
import ShoppingCart from './Component/ShoppingCart';
import CheckoutForm from './Component/chekoutForm';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const checkout = () => {
    // Implement checkout logic, e.g., show a modal or navigate to a confirmation page
    console.log('Checkout:', cart);
  };

  const handleCheckoutSubmit = (formData) => {
    // Implement further checkout logic, e.g., send data to a server
    console.log('Checkout Form Submitted:', formData);
    // Reset the cart after successful checkout
    setCart([]);
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />
      <CheckoutForm onSubmit={handleCheckoutSubmit} />
    </div>
  );
}

export default App;
