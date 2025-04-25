import React from 'react'
import { Link } from 'react-router'

export default function Itemcolbox(props) {
  let name = props.product.name;
  name = name.replaceAll(" ", "-");
  return (
    <div className="col" key={props.product.id}>
              <Link className="text-decoration-none" to={`../p/${props.product.id}/${name}`} >
                <div id="productBox" style={{ width: '16rem' }} className="card h-100">
                  <img
                    src={props.product.image}
                    height="140" width="140" className="card-img-top" alt={props.product.name}
                  />
                  <div className="card-body mt-5 lh-1 d-flex align-items-end">
                    <div>
                      <p className="text-muted">{props.product.category}</p>
                      <h6 className="card-title">{props.product.name}</h6>
                      <p className="text-warning mb-2">
                        {'★'.repeat(Math.round(props.product.rating / 100))}
                        ({props.product.rating})
                      </p>
                      <p className="fw-bold mb-0">{props.product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
  )
}
