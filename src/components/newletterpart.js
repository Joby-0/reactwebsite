import React,{ useState } from 'react'

export default function Newletterpart() {
    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };
  return (
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
          Join Our Community & Never Miss Out!
        </h1>
        <p className="col-lg-10 fs-4">
          Sign up for our newsletter and get exclusive deals, industry insights, and the latest updates straight to your inbox.
          No spam, just great content!
        </p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="submitFornewsletter"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="submitFornewsletter">Email address</label>
          </div>

          <div className="checkbox mb-3">
            {/* Add any additional checkbox if needed */}
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign Me Up!
          </button>
          <hr className="my-4" />
          <small className="text-body-secondary">
            By clicking Sign up, you agree to the <a href="#">terms of use.</a>
          </small>
        </form>
      </div>
    </div>
  )
}
