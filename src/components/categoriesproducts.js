import React from 'react'
import Itemcolbox from './itemcolbox'

export default function Categoriesproducts(props) {
  return (
    <div className="row row-cols g-1 pt-2">
        {props.products.map((product) => (
          <Itemcolbox product = {product}/>
        ))}
      </div>
  )
}
