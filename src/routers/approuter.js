import React from 'react'
import { Route, Routes } from 'react-router'

import Index from '../pages'
import Itempage from '../pages/itempage'
import Errorpage from '../pages/errorpage'
import Productlisting from '../pages/productlisting'
import Categorypage from '../pages/categorypage'

import Aboutlayout from '../pages/aboutlayout'
import About from '../pages/aboutpages/about'
import Faq from '../pages/aboutpages/faq'
import Contact from '../pages/aboutpages/contact'
import Customers from '../pages/aboutpages/customers'
import Howitworks from '../pages/aboutpages/howitworks'


const languages = ["", "sv"]; // "" is default (like /), "sv" is for /sv

const routes = [
    { path: "/", element: <Index /> },
    { path: "/c/:categorySlug", element: <Categorypage /> },
    { path: "/c/:categorySlug/:subSlug", element: <Categorypage /> },
    { path: "/p/:subSlug", element: <Productlisting /> },
    { path: "/p/:id/:product", element: <Itempage /> },
];



export default function Approuter() {
    return (
        <Routes>

            {languages.map((lang) =>
                routes.map(({ path, element }, index) => (
                    <Route
                        key={lang + path + index}
                        path={`${lang}${path}`}
                        element={element}
                    />
                ))
            )}
            <Route path="/info" element={<Aboutlayout/>}>
                
                <Route path='about' element={<About />} />
                <Route path="faq" element={<Faq />} />
                <Route path="how-it-works" element={<Howitworks />} />
                <Route path="contact" element={<Contact />} />
                <Route path="customers" element={<Customers />} />
            </Route>
            <Route path='*' element={<Errorpage />} />

        </Routes>
    )
}
