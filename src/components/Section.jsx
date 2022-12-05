import React, { useState } from "react";
import Card from "./Card";
import dummyProducts from "../dummyProducts.json";

export default function Section() {
  const [clothes] = useState(dummyProducts);
  return (
    <div className="row mt-5">
      {clothes.map((clothe) => (
        <div className="col">
          <Card
            img={clothe.variants[0].image}
            name={clothe.variants[0].name}
            id={clothe.id}
          ></Card>
        </div>
      ))}
    </div>
  );
}
