import React from 'react'
import Productshowcase from '../components/productshowcase'
import Productnavmenu from '../components/productnavmenu'
import Productstoreslist from '../components/productstoreslist'
import Productsdescription from '../components/productsdescription'
import Productsreviews from '../components/productsreviews'
import Data from '../services/data'

export default function Itempage(props) {
    const data = new Data();

    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <Productshowcase data={data[0]} />
                        <Productnavmenu />
                        <Productstoreslist data={data[0].pricelist} />
                        <Productsdescription data={data[0].desc} />
                        <Productsreviews />
                    </div>
                    <div id='adds' className="col-2">

                    </div>
                </div>
            </div>
        </>
    )
}
