import React, { useEffect } from 'react'

export default function Errorpage() {
  useEffect(() => {
    document.title = "JOBY - ERROR"
  })
  return (
    <div className='container'>
        <h1>Ops, something went wrong</h1>
        <h2>Page not found</h2>
    </div>
  )
}
