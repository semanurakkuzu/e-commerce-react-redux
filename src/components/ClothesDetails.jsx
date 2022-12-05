import React, { useState } from "react";

export default function ClothesDetails({ clothe }) {
  const [variant, setVariant] = useState(clothe.variants[0])
  
  return (
    <div className="row align-items-center mt-5">
      <div className="col">
        <div>
          <img className="img-size" src={variant.image} alt={clothe.name} />
        </div>
      </div>
      <div className="col">
        <p className="fs-1">{clothe.name}</p>
        <div className="row mt-5">
          {clothe.variants.map((variant) => (
            <div className="col-auto">
              <div
                className="color"
                style={{ background: variant.color }} 
                onMouseEnter={() => {
                  setVariant(variant)
                }}
              ></div>
            </div>
          ))}
        </div>
        {variant.stock == 0 && 
        <div class="alert alert-warning mt-5" role="alert">
            Ürünün stoğu tükenmiştir
        </div> 
        
        }
       
      </div>
    </div>
  );
}
