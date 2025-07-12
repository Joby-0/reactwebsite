import React from 'react'
import { Link } from 'react-router'

export default function Itemcolbox(props) {
  let name = props.product.name;
  name = name.replaceAll(" ", "-");
  return (
    <div className="col" key={props.product.id}>
      <Link className="text-decoration-none" to={`../p/${props.product.id}/${name}`} >
        <div id="productBox" style={{ width: '16rem' }} className="card h-100">
          <div id='imgbox' className=' rounded'>
            <div id='imgcontainer' className='pt-2 pb-3 px-3 h-100 w-100 d-flex'>
              <img
                src={props.product.image}
                height="206" width="206" className="card-img-top" alt={props.product.name}
              />
            </div>

          </div>
          <div className="pt-2 pb-3 px-3 lh-1 d-flex align-items-end">
            <div>
              <p className="text-muted mb-1">{props.product.category}</p>
              <h6 className="card-title">{props.product.name}</h6>
              <p className="text-warning mb-2">
                {'★'.repeat()}
                ({props.product.rating})
              </p>
              <p className="fw-bold fs-5 mb-0">{props.product.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
