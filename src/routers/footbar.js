import React from 'react'
import { Link } from 'react-router'

export default function Footbar() {
  return (
    <footer className="row py-5 my-5 border-top row-cols-1 row-cols-sm-2 row-cols-md-5">
        <div id="footerOrder2" className="col col-md-2 mb-3">
          <h5>Joby</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to='../info/contact' className="nav-link p-0 text-body-secondary">Contact us</Link></li>
            <li className="nav-item mb-2"><Link to="../info/about" className="nav-link p-0 text-body-secondary">About</Link></li>
            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-body-secondary">Promos</Link></li>
            <li className="nav-item mb-2"><Link to='../info/faq' className="nav-link p-0 text-body-secondary">FAQs</Link></li>
          </ul>
        </div>
        <div id="footerOrder3" className="col col-md-2 mb-3">
          <h5>Categories</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-body-secondary">Sport</Link></li>
            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-body-secondary">Computer</Link></li>
            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-body-secondary">Phones</Link></li>
            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-body-secondary">Vehicles</Link></li>
            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-body-secondary">Clothes</Link></li>
          </ul>
        </div>
        <div id="footerOrder4" className="col col-md-2 mb-3">
          <h5>Terms</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-body-secondary">Terms of Use</Link></li>
            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-body-secondary">Privacy Settings</Link></li>
            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-body-secondary">Pricing</Link></li>
          </ul>
        </div>
        <div id="footerOrder1" className="col col-md-5 mb-3">
          <Link href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
            <h1>Joby</h1>
          </Link>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eaque ducimus voluptates eveniet fugiat esse officia illum corrupti hic. Vitae dignissimos ratione mollitia expedita dolorem assumenda minima unde adipisci laudantium.</p>
          <div className="d-flex">
            <Link className="btn" href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </Link>
            <Link className="btn" href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
            <Link className="btn" href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </Link>
          </div>
          <p className="text-body-secondary py-2">© 2025</p>
        </div>
      </footer>
  )
}
