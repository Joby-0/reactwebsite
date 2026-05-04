import React from 'react'
import Itemcolbox from './itemcolbox'
import ItemcolboxPlaceholder from "./itemcolboxPlaceholder";


export default function Categoriesproducts(props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4 items per row
        gap: "1rem",
      }}
    >
      {props.loading
        ? [...Array(20)].map((_, i) => (
          <ItemcolboxPlaceholder key={i} />
        ))
        : props.products.pageItems.map((product, index) => {
          // Insert ads every 5 products
          const items = [
            <Itemcolbox key={product.productId} product={product} currency={props.currency} />
          ];

          // if ((index + 1) % 5 === 0) {
          //   // Random ad type
          //   const isLarge = Math.random() > 0.5;
          //   items.push(
          //     <div
          //       key={`ad-${index}`}
          //       style={{
          //         gridColumn: isLarge ? "span 5" : "span 2",
          //         gridRow: isLarge ? "span 2" : "span 1",
          //       }}
          //     >
          //       <div id='' className=""></div>
          //     </div>
          //   );
          // }

          return items;
        })}
    </div>



  )
}
