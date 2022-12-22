import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteToCart} from '../redux/cartSlice'
export default function Cart({id,name,img}) {
    const cart = useSelector((state) => state.cart.id)
    const dispatch = useDispatch()
  

  return (
    <div>
      <div className='container'>
            <div class="card mb-3" style={{maxWidth: "540px"}} itemID={id}>
            <div class="row g-0">
                <div class="col-md-4">
                <img src={img} class="img-fluid rounded-start" alt={name}/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <button type="button" class="btn btn-danger" onClick={() => dispatch(deleteToCart())}>Delete
                    </button>
                </div>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}