import React, { useEffect, useState } from 'react'
import '../css/fullpagedropdown.css'
import Categorydropdownlinks from '../routers/categorydropdownlinks';
import Categoriesfullpagedisplay from './categoriesfullpagedisplay';

export default function Categoriesfullpagedropdown(props) {
  const [activecategories, setActiveCategories] = useState()
  const changeCategory = (category) => {
    setActiveCategories(category)
  }
  useEffect(() => {
    console.log("d");

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
          <Categorydropdownlinks onClick={changeCategory} />
          <Categoriesfullpagedisplay category={activecategories}/>
        </div>
      </div>
    </div>
  )
}
