import React, { useRef, useState, useEffect } from 'react';
import '../css/itemcarusal.css'
import Itemcolbox from './itemcolbox';

export default function Itemscarusal(props) {
  //ändra till props later
  const products = props.data
  
  
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };
    
    

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      handleScroll(); // initialize
    }
    

    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    console.log("canScrollRight updated:", canScrollRight);
    console.log("canScrollLeft updated:", canScrollLeft);
  }, [canScrollLeft, canScrollRight]);
  return (
    <>
      {/* Popular items part */}
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 position-relative">
        <h3 className="mb-2">{props.catName}</h3>
        <div id="popularProductRRow" ref={scrollRef} style={{ scrollBehavior: 'smooth' }} className="row gap-0 p-1 row-gap-3">
          {products.map(product => (
            <Itemcolbox key={product.id} product = {product}/>
          ))}

          {/* Navigation buttons */}
          {canScrollLeft && (
            <button onClick={scrollLeft} className="items-prev btn btn-light p-4 rounded-circle">
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
          )}
          {canScrollRight && (
            <button onClick={scrollRight} className="item-next btn btn-light p-4 rounded-circle">
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
          )}
        </div>
      </div>
    </>
  )
}
