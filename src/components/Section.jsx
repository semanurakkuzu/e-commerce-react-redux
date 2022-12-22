import React, { useState } from "react";
import Card from "./Card";
import dummyProducts from "../dummyProducts.json";

export default function Section() {
  const [clothes] = useState(dummyProducts);
  return (
    <div className="row mt-5">
      {clothes.map((clothe) => (
        <div className="col" key={`clothe-${clothe.id}`}>
          <Card
            img={clothe.variants[0].image}
            name={clothe.name}
            id={clothe.id}
          ></Card>
        </div>
      ))}
    </div>
  );
}
