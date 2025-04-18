import React from 'react'
import { Link } from 'react-router'
import Categoriylinks from '../routers/categoriylinks'

export default function Categories() {
    
    return (
        <div className="container text-center">
            <h1 className="mb-4">Categories</h1>
            <Categoriylinks/>
        </div>


    )
}
