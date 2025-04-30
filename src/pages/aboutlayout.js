import React from 'react'
import Aboutsidebar from '../components/aboutsidebar'
import { Outlet } from 'react-router'
import Divider from '../components/divider'

export default function Aboutlayout() {
    return (
        <>
            
            <div className="container">
                <div className="row">
                    <Aboutsidebar />
                    <div className="col">
                        <Divider height={50}/>
                        <Outlet />

                    </div>
                </div>
            </div>
        </>
    )
}
