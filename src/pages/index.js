import React, { useEffect, useState } from 'react'
import Heroindex from '../components/heroindex'
import Categories from '../components/categories'
import Itemscarusal from '../components/itemscarusal'
import Bigsponsorpart from '../components/bigsponsorpart'
import Shortabout from '../components/shortabout'
import Newletterpart from '../components/newletterpart'
import Divider from '../components/divider'
// import { PopularProducts } from '../services/data'

import ProductService from '../services/productservice';



export default function Index(props) {
  // const service = new ProductService('', null, false)
  const [data, setData] = useState({ pageItems: [], dbItemsCount: 0 });
  const service = new ProductService('https://localhost:7020/api');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Call your service method
        const products = await service.readTopProductsAsync("9ce5eb59-01c0-4742-b2a6-717570ac1f91");
        setData(products); // store the fetched data
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []); // empty dependency array = run once on mount

  // Extract pageItems for mapping
  const products = data.pageItems || [];

  return (
    <>

      <Heroindex />
      <Categories />
      <Divider height={50} />
      <div className="container">
        <Itemscarusal data={products} catName="Popular phones" />
        <Itemscarusal data={products} catName="others" />
        <Bigsponsorpart />
        <Itemscarusal data={products} catName="more others" />
        <Divider height={100} />
        <Shortabout />
        <Divider height={100} />
        <Newletterpart />

      </div>

    </>
  )
}
