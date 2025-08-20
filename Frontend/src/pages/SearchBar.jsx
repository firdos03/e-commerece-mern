import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

export const SearchBar = () => {
  const { setShowSearchBar, showSearchBar, setSearchValue, searchValue } =
    useContext(ShopContext);

  const loacation = useLocation();

  useEffect(() => {}, [loacation]);
  return loacation.pathname === "/collection" && showSearchBar ? (
    <div className="border-t border-b bg-gray-50 text-center mt-24">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        className="inline w-3 cursor-pointer ml-2"
        onClick={() => setShowSearchBar(false)}
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};
