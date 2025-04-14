import React from 'react'
import Productshowcase from '../components/productshowcase'
import Productnavmenu from '../components/productnavmenu'
import Productstoreslist from '../components/productstoreslist'
import Productsdescription from '../components/productsdescription'
import Productsreviews from '../components/productsreviews'

export default function Itempage(props) {
    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <Productshowcase data = {props?.data[0]}/>
                        <Productnavmenu />
                        <Productstoreslist data = {props?.data[0].pricelist}/>
                        <Productsdescription/>
                        <Productsreviews/>
                    </div>
                    <div id='adds' className="col-2">

                    </div>
                </div>
            </div>
        </>
    )
}
