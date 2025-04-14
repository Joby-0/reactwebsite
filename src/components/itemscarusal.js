import React from 'react'
import '../css/itemcarusal.css'

export default function Itemscarusal(props) {
    //ändra till props later
    const products = [
        {
          id: 1,
          category: 'Phones',
          name: 'iPhone 16 Pro Max, 256GB',
          image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          rating: 542,
          price: '16090 sek',
          url: '/categorys/product.html'
        },
        {
          id: 2,
          category: 'Phones',
          name: 'Samsung Galaxy S23 Ultra',
          image: 'https://example.com/product2.jpg',
          rating: 350,
          price: '12990 sek',
          url: '/categorys/product2.html'
        },
        {
          id: 3,
          category: 'Phones',
          name: 'OnePlus 11 Pro',
          image: 'https://example.com/product3.jpg',
          rating: 300,
          price: '11990 sek',
          url: '/categorys/product3.html'
        },
        {
          id: 4,
          category: 'Phones',
          name: 'Google Pixel 8 Pro',
          image: 'https://example.com/product4.jpg',
          rating: 100,
          price: '14990 sek',
          url: '/categorys/product4.html'
        }
        ,
        {
          id: 5,
          category: 'Phones',
          name: 'Google Pixel 8 Pro',
          image: 'https://example.com/product4.jpg',
          rating: 100,
          price: '14990 sek',
          url: '/categorys/product4.html'
        }
        ,
        {
          id: 6,
          category: 'Phones',
          name: 'Google Pixel 8 Pro',
          image: 'https://example.com/product4.jpg',
          rating: 100,
          price: '14990 sek',
          url: '/categorys/product4.html'
        }
        ,
        {
          id: 8,
          category: 'Phones',
          name: 'Google Pixel 8 Pro',
          image: 'https://example.com/product4.jpg',
          rating: 100,
          price: '14990 sek',
          url: '/categorys/product4.html'
        }
        // Add more products as needed
      ];
  return (
    <>
      {/* Popular items part */}
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <h3 className="mb-2">{props.catName}</h3>
        <div id="popularProductRRow" className="row gap-0 p-1 row-gap-3">
          {products.map(product => (
            <div className="col" key={product.id}>
              <a className="text-decoration-none" href={product.url}>
                <div id="productBox" style={{ width: '15rem' }} className="card h-100">
                  <img
                    src={product.image}
                    height="140" width="140" className="card-img-top" alt={product.name}
                  />
                  <div className="card-body mt-5 lh-1 d-flex align-items-end">
                    <div>
                      <p className="text-muted">{product.category}</p>
                      <h6 className="card-title">{product.name}</h6>
                      <p className="text-warning mb-2">
                        {'★'.repeat(Math.round(product.rating / 100))} 
                        ({product.rating})
                      </p>
                      <p className="fw-bold mb-0">{product.price}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
          
          {/* Navigation buttons */}
          <button className="items-prev btn btn-light p-4 rounded-circle">
            <span
              id="prev-arrow"
              className="position-absolute top-50 start-50 translate-middle"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              </svg>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="item-next btn btn-light p-4 rounded-circle">
            <span
              id="next-arrow"
              className="position-absolute top-50 start-50 translate-middle"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </>
  )
}
