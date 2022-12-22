import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './cartSlice'

export function Cart() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='container'>
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <button type="button" class="btn btn-danger">Delete
                    </button>
                </div>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}