import React from 'react'

export default function Productsdescription() {
  return (
    <section id="description">
    <div className="p-4 mb-4 bg-body-tertiary rounded-3">
      <div className="row">
        {/* Product Information */}
        <div className="col-md-6 p-2">
          <h3>Product Information</h3>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span>Product Name</span>
              <span className="text-end">Apple iPhone 16 Pro Max</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Manufacturer</span>
              <span className="text-end">Apple</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Model Number</span>
              <span className="text-end">16 Pro Max</span>
            </li>
          </ul>
        </div>

        {/* Specifications */}
        <div className="col-md-6 p-2">
          <h3>Specifications</h3>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span>Dimensions</span>
              <span className="text-end"></span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Weight</span>
              <span className="text-end"></span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Material(s)</span>
              <span className="text-end"></span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Color(s)</span>
              <span className="text-end"></span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Storage size</span>
              <span className="text-end">256GB</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>more</span>
              <span className="text-end">123</span>
            </li>
          </ul>
        </div>

        {/* Group Data Sections */}
        {[...Array(4)].map((_, index) => (
          <div className="col-md-6 p-2" key={index}>
            <h3>Group data</h3>
            <ul className="list-group">
              {[...Array(index === 0 ? 6 : index === 3 ? 7 : 4)].map((_, i) => (
                <li
                  className="list-group-item d-flex justify-content-between"
                  key={i}
                >
                  <span>data</span>
                  <span className="text-end">123</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
