import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = "20";
  const [searchValue , setSearchValue] = useState("")
  const [showSearchBar, setShowSearchBar] = useState(false);

  const value = {
    products,
    currency,
    delivery_fee,
    setShowSearchBar,
    showSearchBar,
    setSearchValue,
    searchValue
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
