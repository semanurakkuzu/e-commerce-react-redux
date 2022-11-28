import React, { useState } from "react";
import Card from "./Card";

export default function Section() {
  const dummyClothes = [
    {
      imges: "https://assets.adidas.com/images/w_600,f_auto,q_auto/013d71f10d8e4b5b9982ac760053ce5d_9366/Adicolor_Trefoil_Bucket_Hat_Pink_GN4906_02_standard_hover.jpg",
      names: "Hat",
    },
    {
      imges: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1656695705/547865_XJEJZ_6178_002_100_0000_Light-Childrens-cotton-jersey-T-shirt.jpg",
      names: "T-shirt",
    },
    {
      imges: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-amazon-dresses-2022-1652201708.jpg?crop=0.383xw:0.766xh;0.308xw,0.125xh&resize=640:*",
      names: "Dress",
    },
    {
      imges: "https://target.scene7.com/is/image/Target/GUEST_17291fc9-d3ef-4f31-8c31-bab0c91ed82b",
      names: "Pants",
    },
  ];
  const [clothes, SetClothes] = useState(dummyClothes);
  return (
    <div className="row mt-5">
      {clothes.map((clothe) => (
        <div className="col">
          <Card 
          img={clothe.imges}
          name={clothe.names}
          >
          </Card>
        </div>
      ))}
    </div>
  );
}
