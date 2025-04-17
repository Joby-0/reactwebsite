import React from 'react'
import { Route, Routes } from 'react-router'


import Header from '../components/header'
import Index from '../pages'
import Itempage from '../pages/itempage'
import CategoriesPage from '../pages/categoriespage'
import Signinmodal from '../components/signinmodal'
import Footer from '../components/footer'
import Errorpage from '../pages/errorpage'


export default function Approuter() {
    return (
        <Routes>
            
            <Route path='/' element={<Index />}/>
            <Route path='/p/:id/:product' element={<Itempage />}/>
            <Route path='/c/:id/:categories' element={<CategoriesPage />}/>

            <Route path='/p/' element={<Itempage />}/>
            <Route path='/c/' element={<CategoriesPage />}/>

            

            <Route path='*' element={<Errorpage/>}/>
            
        </Routes>
    )
}
