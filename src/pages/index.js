import React, { useEffect, useState } from 'react'
import Heroindex from '../components/heroindex'
import Categories from '../components/categories'
import Itemscarusal from '../components/itemscarusal'
import Bigsponsorpart from '../components/bigsponsorpart'
import Shortabout from '../components/shortabout'
import Newletterpart from '../components/newletterpart'
import Divider from '../components/divider'

import { _productService } from "../services/productservice";


export default function Index(props) {
  const [data, setData] = useState({ pageItems: [], dbItemsCount: 0 });
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Call your service method
        const products = await _productService.readTopProductsAsync("faf07f9e-3c9e-44ed-9dd7-d4128e91953f");

        setData(products); // store the fetched data

      } catch (err) {
        console.error(err);
      }
      finally{
        setLoading(false)
      }
    };

    fetchProducts();
  }, []); 

  // Extract pageItems for mapping
  const products = data.pageItems || [];

  return (
    <>

      <Heroindex />
      <Categories />
      <Divider height={50} />
      <div className="container">
        <Itemscarusal loading={loading} data={products} catName="Popular phones" />
        <Itemscarusal loading={loading} data={products} catName="others" />
        <Bigsponsorpart />
        <Itemscarusal loading={loading} data={products} catName="more others" />
        <Divider height={100} />
        <Shortabout />
        <Divider height={100} />
        <Newletterpart />

      </div>

    </>
  )
}
