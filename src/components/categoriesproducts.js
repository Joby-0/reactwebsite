import React from 'react'
import Itemcolbox from './itemcolbox'
import ItemcolboxPlaceholder from "./itemcolboxPlaceholder";


export default function Categoriesproducts(props) {
  return (
    <div className="row  g-2 pt-2">
      {props.loading ? (
        [...Array(20)].map((_, i) => <ItemcolboxPlaceholder key={i} />)
      ) : (
        props.products.pageItems.map((product) => (
          <Itemcolbox
            key={product.productId}
            product={product}
            className="product-card"
          />
        ))
      )}
    </div>
  )
}
