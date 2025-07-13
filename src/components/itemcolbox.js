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
                height="200" width="200" className="card-img-top" alt={props.product.name}
              />
            </div>

          </div>
          <div className="pt-2 pb-2 px-3 d-flex flex-column h-100">
            <p className="text-muted mb-1">{props.product.category}</p>

            <h6 className="card-title mb-1" style={{display: '-webkit-box',WebkitLineClamp: 2,WebkitBoxOrient: 'vertical',overflow: 'hidden',}}>
              {props.product.name}
            </h6>
              {/* fix star */}
            <div className="mt-auto">
              <p className="text-warning mb-1">
                {'★'.repeat(Math.round(props.product.rating))} ({props.product.rating})
              </p>
              <p className="fw-bold fs-5 mb-0">{props.product.price}</p>
            </div>
          </div>


        </div>
      </Link>
    </div>
  )
}
