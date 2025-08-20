import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  console.log("products", latestProducts);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          consequatur recusandae velit maiores esse quo sit, accusantium
          asperiores aliquam ipsam, aperiam magni exercitationem beatae quisquam
          provident mollitia? Nulla, quisquam facere.
        </p>
      </div>

      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((elem, index) => {
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
  );
};

export default LatestCollection;
