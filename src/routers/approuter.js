import React from 'react'
import { Route, Routes } from 'react-router'

import Index from '../pages'
import Itempage from '../pages/itempage'
import Errorpage from '../pages/errorpage'
import Productlisting from '../pages/productlisting'
import Categorypage from '../pages/categorypage'
import ScrollToTop from '../components/scrolltotop'

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
            <Route path='*' element={<Errorpage />} />

        </Routes>
    )
}
