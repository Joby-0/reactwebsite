import React, { useEffect, useState } from 'react'
import Heroindex from '../components/heroindex'
import Categories from '../components/categories'
import Itemscarusal from '../components/itemscarusal'
import Bigsponsorpart from '../components/bigsponsorpart'
import Shortabout from '../components/shortabout'
import Newletterpart from '../components/newletterpart'
import Divider from '../components/divider'
import { PopularProducts } from '../services/data'




export default function Index(props) {
  // const service = new ProductService('', null, false)
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      // const products = await service.readProductsAsync();
      const products = new PopularProducts();
      setData(products);
    })();
  }, []);

  return (
    <>

      <Heroindex />
      <Categories />
      <Divider height={50} />
      <div className="container">
        <Itemscarusal data={data} catName="Popular phones" />
        <Itemscarusal data={data} catName="others" />
        <Bigsponsorpart />
        <Itemscarusal data={data} catName="more others" />
        <Divider height={100} />
        <Shortabout />
        <Divider height={100} />
        <Newletterpart />

      </div>

    </>
  )
}
