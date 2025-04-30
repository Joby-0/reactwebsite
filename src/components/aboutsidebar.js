import React from 'react'
import Aboutsidebarlinks from '../routers/aboutsidebarlinks'

export default function Aboutsidebar() {
  return (
    <div
          className="d-flex flex-column flex-shrink-0 p-3"
          style={{ width: "280px", height: "100vh", position: "sticky", top: 0 }}
        >
          <Aboutsidebarlinks/>
        </div>
  )
}
