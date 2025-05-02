import React, {useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function Categoriesfullpagedisplay(props) {
    const [category, setCategory] = useState(null)
    useEffect(() => {
        setCategory(props.category)
    },[props.category])

    if (!category) return null; // or show a loading state
    return (
        <div className="col">
      <Link className="fs-1 text-decoration-none" to={`/category/${category.id}`}>
        {category.fullname}
      </Link>
    </div>
    )
}
