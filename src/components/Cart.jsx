import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteClotheFromCart} from "../redux/cartSlice"
import Nav from "./Nav";
export default function Cart() {
  const clothes = useSelector((state) => state.cart.data);
  const dispatch = useDispatch()

  return (
    <div>
      <div className="container">
        <Nav></Nav>
        {clothes.map((clothe) => (
          <div className="card mb-3 mt-5 cart-img">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={clothe.img} className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{clothe.name}</h5>
                  <button type="button" className="btn btn-danger" onClick={() => dispatch(deleteClotheFromCart(clothe.id))}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {!clothes.length && (
          <div className="alert alert-warning mt-5" role="alert">
            Sepetinizde ürün bulunmamaktadır.
          </div>
        )}
      </div>
    </div>
  );
}
