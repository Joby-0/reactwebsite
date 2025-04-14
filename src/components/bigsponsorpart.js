import React from 'react'

export default function Bigsponsorpart() {
  return (
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img
          src="https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75"
          className="d-block mx-lg-auto img-fluid"
          alt="New iPhone"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div className="col-lg-6">
        <span className="badge bg-secondary-subtle text-secondary-emphasis rounded-pill">Sponsored</span>
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">New Iphone</h1>
        <p className="lead">
          Experience the power of innovation with the new iPhone — All-day battery, pro-level camera, blazing speed.
          Meet your next phone.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}
