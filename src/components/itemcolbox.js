import React from 'react'
import { Link } from 'react-router-dom'
import { slugify } from '../services/Helpers/slugify';
export default function Itemcolbox(props) {



  return (
    <div className="col" key={props.product.ProductId}>
      <Link className="text-decoration-none" to={`/${props.product.shortKey}/${slugify(props.product.productName)}`} >
        <div id='productBox' className="card h-100 product-card">
          <div className="p-3 pb-0">
            {/* Image box */}
            <div style={{ aspectRatio: "5 / 4" }} className="ratio ratio-1x1 mb-2  d-flex align-items-center justify-content-center">
              <img
                src={props.product.thumbnailImage}
                alt={props.product.productName}
                className="img-fluid"
                style={{
                  
                  objectFit: "contain",
                  
                }}
              />
            </div>

            {/* Text */}
            <h6 id='product-title' className="mb-2 fs-5">
              {props.product.productName}
            </h6>
            <p className="text-muted small">
              {props.product.categoryName}
            </p>

            
          </div>


          <div className="p-3 pt-0 d-flex flex-column">


            <div className="">
              <p className="text-warning mb-1">
                {(() => {
                  const rating = props.product.avgRating;
                  const stars = [];

                  for (let i = 1; i <= 5; i++) {
                    if (rating >= i) {
                      stars.push(<i key={i} className="bi bi-star-fill"></i>);
                    } else if (rating >= i - 0.5) {
                      stars.push(<i key={i} className="bi bi-star-half"></i>);
                    } else {
                      stars.push(<i key={i} className="bi bi-star"></i>);
                    }
                  }

                  return stars;
                })()} ({props.product.reviewCount})
              </p>

              <p className="fw-bold fs-5 mb-0">
                {props.product.productPrice} {props.currency}
              </p>
            </div>
          </div>
        </div>

      </Link>
    </div>
  )
}
