import React from 'react'
import { Route, Routes } from 'react-router'

import Index from '../pages'
import Itempage from '../pages/itempage'
import Errorpage from '../pages/errorpage'
import Productlisting from '../pages/productlisting'
import Categorypage from '../pages/categorypage'


export default function Approuter() {
    return (
        <Routes>
            {/* main */}
            <Route path='/' element={<Index />} />

            {/* cagegories och sub cat */}
            <Route path="/c/:categorySlug" element={<Categorypage />} />       
            <Route path="/c/:categorySlug/:subSlug" element={<Categorypage />} /> 
            

            <Route path="/p/:subSlug" element={<Productlisting />} /> 

            {/* the producjt page */}
            <Route path='/p/:id/:product' element={<Itempage />} />


            {/* error page no page found */}
            <Route path='*' element={<Errorpage />} />

        </Routes>
    )
}
