import React, { useContext, useEffect, useState } from 'react'
import '../css/fullpagedropdown.css'
import Categorydropdownlinks from '../routers/categorydropdownlinks';
import Categoriesfullpagedisplay from './categoriesfullpagedisplay';

import { CategoriesContext } from "../services/CategoriesContext";


export default function Categoriesfullpagedropdown(props) {
  const { categories, loading } = useContext(CategoriesContext);
  const [activeCategories, setActiveCategories] = useState(categories[0] || null);


  const changeCategory = (category) => {
    setActiveCategories(category);
  };
  useEffect(() => {


    if (props.isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [props.isOpen]);
  useEffect(() => {
    if (categories.length > 0 && !activeCategories) {
      setActiveCategories(categories[0]);
    }
  }, [categories, activeCategories]);

  if (!props.isOpen) return null;



  return (
    <div className="full-page-dropdown bg-body">
      <div className="dropdown-content container">
        <div className='row'>
          <Categorydropdownlinks categories={categories} onClick={changeCategory} />
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Categoriesfullpagedisplay category={activeCategories} />
          )}
        </div>
      </div>
    </div>
  )
}
