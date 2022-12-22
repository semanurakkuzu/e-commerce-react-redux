import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart} from '../redux/cartSlice'
import { Link } from "react-router-dom";


export default function Card(props) {
  const dispatch = useDispatch()

  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt={props.name} />
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <Link className="btn btn-warning" to={`/clothes/${props.id}`}>
          Show more
        </Link>
        <button className="btn btn-warning ms-3" onClick={() => dispatch(addToCart())}>
        Add to cart
        </button>
      </div>
    </div>
  );
}
