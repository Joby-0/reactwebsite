import React from 'react'
import Heroindex from '../components/heroindex'
import Categories from '../components/categories'
import Itemscarusal from '../components/itemscarusal'
import Bigsponsorpart from '../components/bigsponsorpart'
import Shortabout from '../components/shortabout'
import Newletterpart from '../components/newletterpart'
import Footer from '../components/footer'


export default function Index() {
  return (
    <>
      <Heroindex />
      <Categories />
      <div className="container">
        <Itemscarusal catName="Popular phones" />
        <Itemscarusal catName="others" />
        <Bigsponsorpart />
        <Itemscarusal catName="more others" />
        <Shortabout/>
        <Newletterpart/>
        
      </div>
      
    </>
  )
}
