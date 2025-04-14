import React from 'react'

export default function Heroindex() {
  return (
    <div className="container">
      <div
        style={{ height: '500px' }}
        className="row my-4 bg-body-tertiary rounded-5 align-items-center justify-content-center"
      >
        <div className="col-md-6 p-5">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Compare Prices on Thousands of Products Instantly
          </h1>
          <p className="lead">Save money. Save time. Find the best deal.</p>
          <input
            className="form-control form-control-lg"
            type="search"
            placeholder="What are you looking for?"
            aria-label="Search"
          />
        </div>
      </div>
    </div>
  )
}
