import React, { use, useEffect, useState } from 'react'
import { useParams } from "react-router";

import Categoryfilter from '../components/categoryfilter'
import Categoriesfilterdisplay from '../components/categoriesfilterdisplay';
import Categoriesproducts from '../components/categoriesproducts';
import Breadcome from '../components/breadcome';
import { useLocation } from 'react-router';

import ProductService from '../services/productservice';

export default function Productlisting() {
  const service = new ProductService('https://localhost:7020/api');
  const { subsubSlug } = useParams();

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

  //filter
  const [products, setProducts] = useState(null);
  const [activeFilter, setActiveFilter] = useState({ storeIds: [], attributeValueIds: [] });
  const [activeOrder, setActiveOrder] = useState('price_desc');
  const [loading, setLoading] = useState(false);



  const onFilterClick = (filterName) => {
    console.log(filterName);
    setActiveFilter()
  }
  const toggleFilter = (filterKey) => {
    // setActiveFilter((prev) => {
    //   const next = prev.includes(filterKey)
    //     ? prev.filter((k) => k !== filterKey)
    //     : [...prev, filterKey];
    //   return next;
    // });
  };


  const removeFilter = (filterKey) => setActiveFilter((prev) => prev.filter((k) => k !== filterKey));



  const OrderChange = (newOrder) => {
    setActiveOrder(newOrder); // triggers useEffect automatically
  };


  const location = useLocation();
  const [activeCat, setActiveCat] = useState([]);



  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const result = await service.readProductsByCategory(subsubSlug, 0, 40, activeFilter, activeOrder);
        setProducts(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (subsubSlug) fetchProducts();
  }, [subsubSlug, activeFilter, activeOrder]);


  return (
    <>
      <Breadcome />

      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className='row'>
              <Categoryfilter activeCat={activeCat} toggleFilter={toggleFilter} removeFilter={removeFilter} activeFilter={activeFilter} filtersdata={filtersdata} />
              <div className="col scrollarea">
                {loading ? (
                  <div>Loading products...</div>
                ) : products?.pageItems?.length > 0 ? (
                  <>
                    <Categoriesfilterdisplay
                      nrOfProduct={products.dbItemsCount}
                      activeFilter={activeFilter}
                      removeFilter={removeFilter}
                      OrderChange={OrderChange}
                      activeOrder={activeOrder}
                    />
                    <Categoriesproducts products={products.pageItems} />
                  </>
                ) : (
                  <div>No products found.</div>
                )}
              </div>

            </div>
          </div>
          <div id='adscolumn' className="col-2"></div>
        </div>
      </div>
    </>
  )

}
