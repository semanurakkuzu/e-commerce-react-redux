import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteToCart} from '../redux/cartSlice'
export default function Cart() {
    const dispatch = useDispatch()
    const name = useSelector((state) => state.data.name)
    const img = useSelector((state) => state.data.variants.image)

  return (
    <div>
      <div className='container'>
            <div class="card mb-3">
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