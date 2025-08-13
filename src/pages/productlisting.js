import React, { use, useEffect, useState } from 'react'
import Categoryfilter from '../components/categoryfilter'
import Categoriesfilterdisplay from '../components/categoriesfilterdisplay';
import Categoriesproducts from '../components/categoriesproducts';
import Data from '../services/data';
import Breadcome from '../components/breadcome';
import { useLocation } from 'react-router';

export default function Productlisting() {
  //change to api later
  //data
  const filtersdata = [
    {
      title: 'Store',
      options: [
        { name: 'Amazon', count: 12 },
        { name: 'eBay', count: 8 },
        { name: 'Walmart', count: 4 },
        { name: 'Elgiganten', count: 1 },
        { name: 'NetOnNet', count: 1 },
        { name: 'Komplett', count: 1 },
        { name: 'Rusta', count: 1 },
        { name: 'Jula', count: 1 }
      ]
    },
    {
      title: 'Brand',
      options: [
        { name: 'Apple', count: 6 },
        { name: 'Samsung', count: 5 },
        { name: 'Sony', count: 3 }
      ]
    }
  ];
  const data = new Data();

  //filter
  const [activeFilter, setActiveFilter] = useState([]);
  const [activeOrder, setActiveOrder] = useState('Recommended');


  const onFilterClick = (filterName) => {
    console.log(filterName);
    setActiveFilter()
  }
  const toggleFilter = (filterKey) => {
    setActiveFilter((prev) => {

      const next = prev.includes(filterKey)
        ? prev.filter((k) => k !== filterKey)          // remove
        : [...prev, filterKey];                        // add
      // call your API with next ...
      return next;
    });
    console.log(activeFilter);
  };
  const removeFilter = (filterKey) => setActiveFilter((prev) => prev.filter((k) => k !== filterKey));


  const OrderChange = (e) => {
    setActiveOrder(e)
    //make a api call to change to order
  }

  const location = useLocation();
  const [activeCat, setActiveCat] = useState();

  

  useEffect(() => {
    (async () => {
      
      setActiveCat(location.pathname.split("/").filter((x) => x))

    })();
  }, [activeOrder, activeFilter]);


  return (
    <>
      <Breadcome />

      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className='row'>
              <Categoryfilter activeCat={activeCat} toggleFilter={toggleFilter} removeFilter={removeFilter} activeFilter={activeFilter} filtersdata={filtersdata} />
              <div className="col scrollarea">
                <Categoriesfilterdisplay activeFilter={activeFilter} removeFilter={removeFilter} OrderChange={OrderChange} activeOrder={activeOrder} />
                <Categoriesproducts products={data} />
              </div>
            </div>

          </div>
          <div id='adscolumn' className="col-2"></div>
        </div>

      </div>
    </>
  )
}
