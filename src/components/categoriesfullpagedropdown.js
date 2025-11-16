import React, { useContext, useEffect, useState } from 'react'
import '../css/fullpagedropdown.css'
import Categorydropdownlinks from '../routers/categorydropdownlinks';
import Categoriesfullpagedisplay from './categoriesfullpagedisplay';

import { CategoriesContext } from "../services/CategoriesContext";


export default function Categoriesfullpagedropdown(props) {
  const [activecategories, setActiveCategories] = useState()
  const { categories, loading } = useContext(CategoriesContext);


  const changeCategory = (category) => {
    setActiveCategories(category)

  }
  useEffect(() => {


    if (props.isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [props.isOpen]);
  if (!props.isOpen) return null;
  
  return (
    <div className="full-page-dropdown bg-body">
      <div className="dropdown-content container">
        <div className='row'>
          <Categorydropdownlinks categories={categories} onClick={changeCategory} />
          <Categoriesfullpagedisplay category={activecategories} />
        </div>
      </div>
    </div>
  )
}
