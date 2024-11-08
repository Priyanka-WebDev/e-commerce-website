import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchListOfProducts() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();
    if (result && result.products) {
      setListOfProducts(result.products);
      setLoading(false);
    }
  }

  function handleAddToCart(getProductDetails) {
    let updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(
      (item) => item.id === getProductDetails.id
    );

    if (itemIndex === -1) {
      updatedCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails.price,
      });
    } else {
      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        quantity: updatedCartItems[itemIndex].quantity + 1,
        totalPrice:
          (updatedCartItems[itemIndex].quantity + 1) *
          updatedCartItems[itemIndex].price,
      };
    }

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    navigate("/cart");
  }

  function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
    let updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(
      (item) => item.id === getProductDetails.id
    );

    if (isFullyRemoveFromCart) {
      updatedCartItems.splice(itemIndex, 1);
    } else if (updatedCartItems[itemIndex].quantity > 1) {
      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        quantity: updatedCartItems[itemIndex].quantity - 1,
        totalPrice:
          (updatedCartItems[itemIndex].quantity - 1) *
          updatedCartItems[itemIndex].price,
      };
    } else {
      updatedCartItems.splice(itemIndex, 1); // Remove item if quantity goes to 0
    }

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  useEffect(() => {
    fetchListOfProducts();
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        productDetails,
        setLoading,
        setProductDetails,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
