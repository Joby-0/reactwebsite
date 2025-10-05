import React from 'react'
import { Link } from 'react-router'

export default function Itemcolbox(props) {
  let name = props.product.productName;
  // name = name.replaceAll(" ", "-");
  return (
    <div className="col"  key={props.product.ProductId}>
      <Link className="text-decoration-none" to={`../p/${props.product.id}/${name}`} >
        <div id="productBox" style={{ width: '14rem', height:'' }} className="card h-100">
          <div id='imgbox' className=' rounded'>
            <div id='imgcontainer' className='pt-2 pb-3 px-2  d-flex'>
              <img
                src={props.product.thumbnailImage}
                height="140px" width="150px" 
                className="card-img-top img-thumbnail" alt={props.product.productName}
              />
            </div>

          </div>
          <div className="pt-2 pb-2 px-3 d-flex flex-column h-100">
            <p className="text-muted mb-1">{props.product.categoryName}</p>

            <h6 className="card-title mb-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', }}>
              {props.product.productName}
            </h6>
            
            <div className="mt-auto">
              <p className="text-warning mb-1">
                {(() => {
                  // const ratingStr = props.product.avgRating.toString().replace(',', '.');
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
              <p className="fw-bold fs-5 mb-0">{props.product.productPrice}</p>
            </div>
          </div>


        </div>
      </Link>
    </div>
  )
}
