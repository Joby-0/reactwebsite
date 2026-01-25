import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";

import Categoryfilter from '../components/categoryfilter'
import Categoriesfilterdisplay from '../components/categoriesfilterdisplay';
import Categoriesproducts from '../components/categoriesproducts';
import Breadcome from '../components/breadcome';
import { useLocation } from 'react-router-dom';

import { _productService } from "../services/productservice";


export default function Productlisting() {
  const { subsubSlug } = useParams();



  //filter
  const [products, setProducts] = useState({ filters: [], pageResult: [] });
  const [activeFilter, setActiveFilter] = useState({ storeIds: [], attributeValueIds: [] });
  const [activeOrder, setActiveOrder] = useState('price_desc');
  const [loading, setLoading] = useState(true);



  const onFilterClick = (filterName) => {
    console.log(filterName);
    setActiveFilter()
  }
  const toggleFilter = (filterKey, value) => {
    setActiveFilter(prev => {
      const key =
        filterKey === "store"
          ? "storeIds"
          : "attributeValueIds";

      const current = Array.isArray(prev[key]) ? prev[key] : [];

      let updated;

      if (current.includes(value)) {
        updated = current.filter(v => v !== value);
      } else {
        updated = [...current, value];
      }

      return {
        ...prev,
        [key]: updated
      };
    });
  };





  const removeFilter = (filterKey, value) => {
    console.log(filterKey, value);

    setActiveFilter(prev => {
      const key = filterKey === "store" ? "storeIds" : "attributeValueIds";
      const current = Array.isArray(prev[key]) ? prev[key] : [];
      return {
        ...prev,
        [key]: current.filter(v => v !== value)
      };
    });
  };






  const OrderChange = (apiValue) => {
    setActiveOrder(apiValue);
  };



  const location = useLocation();
  const [activeCat, setActiveCat] = useState([]);



  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const result = await _productService.readProductsWithFilters(subsubSlug, 0, 20, activeFilter, activeOrder);

        console.log(result);

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
              <Categoryfilter activeCat={activeCat} toggleFilter={toggleFilter} removeFilter={removeFilter} activeFilter={activeFilter} filtersdata={products.filters} />
              <div className="col scrollarea">

                <Categoriesfilterdisplay loading={loading} nrOfProduct={products} activeFilter={activeFilter} removeFilter={removeFilter} OrderChange={OrderChange} filtersdata={products.filters} activeOrder={activeOrder} />
                <Categoriesproducts loading={loading} products={products.pageResult} />

              </div>

            </div>
          </div>
          <div id='adscolumn' className="col-2"></div>
        </div>
      </div>
    </>
  )

}
