import React, { useState } from "react";
import ClothesDetails from "./ClothesDetails";
import Nav from "./Nav";
import dummyProducts from "../dummyProducts.json";
import { useParams } from "react-router";

export default function Clothes() {
  let { clotheId } = useParams();
  const [products, setProducts] = useState(dummyProducts);
  const clothe = products.filter((product) => {
    return product.id == clotheId;
  })[0];
  return (
    <div className="container">
      <Nav></Nav>
      <ClothesDetails
      clothe={clothe}
      ></ClothesDetails>
    </div>
  );
}
