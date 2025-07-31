import React from 'react'
import Itemcolbox from './itemcolbox'

export default function Categoriesproducts(props) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-2 pt-2">
        {props.products.map((product) => (
          <Itemcolbox  product = {product}/>
        ))}
      </div>
  )
}
