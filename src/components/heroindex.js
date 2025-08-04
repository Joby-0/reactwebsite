import React, { useEffect, useState } from 'react'
import Data from '../services/data'
import { Link } from 'react-router';
export default function Heroindex() {
  const mockData = new Data()


  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchResults = async (searchTerm) => {
    try {
      setLoading(true);
      // const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`);
      // const data = await response.json();

      handleSearchChange(searchTerm) // ta bort sen när api finns
      // setResults(data.results || []); // Adjust based on your API response shape
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  //temporary
  const handleSearchChange = (e) => {
    const value = e;
    setSearchText(value);

    if (value.length >= 2) {
      const filtered = mockData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())

      );
      console.log(filtered);


      setResults(filtered || []);
    } else {
      setResults([]);
    }
  };



  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchText.length >= 2) {
        fetchResults(searchText);
      } else {
        setResults([]);
      }
    }, 300); // Debounce for 300ms

    return () => clearTimeout(delayDebounce);
  }, [searchText]);

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

          <div className="position-relative" >
            <input
              className="form-control form-control-lg"
              type="search"
              placeholder="What are you looking for?"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            {searchText && (
              <ul className="list-group position-absolute w-100 shadow-sm z-3">
                {loading ? (
                  <li className="list-group-item">Loading...</li>
                ) : results.length >= 2 ? (
                  results.map((item, index) => (
                    <li key={index} className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center">
                        {/* Image */}
                        <img
                          src={item.image}
                          alt={item.name}
                          width={75}
                          height={75}
                          className="img-thumbnail me-3"
                          style={{ objectFit: 'cover' }}
                        />

                        {/* Name and Category */}
                        <div className="flex-grow-1">
                          <div className="fw-semibold">{item.name}</div>

                          <Link className="text-muted small">{item.category}</Link>


                        </div>
                        {/* Price on the left */}
                        <div className="me-3 text-nowrap fw-bold fs-5" style={{ width: '90px' }}>
                          {item.price}
                        </div>

                      </div>
                    </li>

                  ))
                ) : (
                  <li className="list-group-item text-muted">No results</li>
                )}
              </ul>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
