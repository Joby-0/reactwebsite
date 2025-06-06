import React, { useState } from 'react'
import Categoryfilter from '../components/categoryfilter'
import Categoriesfilterdisplay from '../components/categoriesfilterdisplay';
import Categoriesproducts from '../components/categoriesproducts';
import Data from '../services/data';
import Breadcome from '../components/breadcome';

export default function Productlisting() {
  const filters = [
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
  const [activeFilter, setActiveFilter] = useState()

  const onFilterClick = (filterName) => {
    console.log(filterName);
    setActiveFilter()
  }


  return (
    <>
      <Breadcome />

      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className='row'>
              <Categoryfilter onClick={onFilterClick} filters={filters} />
              <div class="col-9 scrollarea">
                <Categoriesfilterdisplay />
                <Categoriesproducts products={data} />
              </div>
            </div>

          </div>
          <div id='ads' className="col-2"></div>
        </div>

      </div>
    </>
  )
}
