import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, searchValue, showSearchBar } = useContext(ShopContext);
  console.log(products);

  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState("");
  const handleToggleCategories = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories((pre) => pre.filter((elem) => elem != e.target.value));
    } else {
      setCategories((pre) => [...pre, e.target.value]);
    }
  };

  const handleToggleSubCategories = (e) => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories((pre) => pre.filter((elem) => elem !== e.target.value));
    } else {
      setSubCategories((pre) => [...pre, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (searchValue && showSearchBar) {
      productsCopy = productsCopy.filter((elem) =>
        elem.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (categories.length > 0) {
      productsCopy = productsCopy.filter((elem) =>
        categories.includes(elem.category)
      );
    }
    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter((elem) =>
        subCategories.includes(elem.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const handleSortby = () => {
    const fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // const handleSearch = () => {
  //   const searchProduct = filterProducts.filter((elem) =>
  //     elem.name.toLowerCade().includes(searchValue.toLowerCade())
  //   );
  //   setFilterProducts(searchProduct);
  // };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    console.log(categories, subCategories);

    applyFilter();
  }, [categories, subCategories, sortType, searchValue, showSearchBar]);

  useEffect(() => {
    handleSortby();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-centre cursor-pointe gap-2"
        >
          FILTER
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light tex-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={handleToggleCategories}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={handleToggleCategories}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={handleToggleCategories}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light tex-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={handleToggleSubCategories}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={handleToggleSubCategories}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={handleToggleSubCategories}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by: Relavent </option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((elem, index) => {
            return (
              <ProductItem
                key={index}
                id={elem._id}
                image={elem.image}
                name={elem.name}
                price={elem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
