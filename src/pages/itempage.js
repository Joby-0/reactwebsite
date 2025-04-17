import React, { useState, useEffect } from 'react'
import Productshowcase from '../components/productshowcase'
import Productnavmenu from '../components/productnavmenu'
import Productstoreslist from '../components/productstoreslist'
import Productsdescription from '../components/productsdescription'
import Productsreviews from '../components/productsreviews'
import Data from '../services/data'
import { useParams } from "react-router";

const dataInstance = new Data(); // once, when file loads

export default function Itempage(props) {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log("Itempage mounted");
    console.log("Params:", useParams());

    useEffect(() => {
        console.log("useEffect render");
        let found = dataInstance.find(item => item.id.toString() === id);

        setProduct(found);

    },[id]);

    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                    {product ? (
                        <>
                            <Productshowcase data={product} />
                            <Productnavmenu />
                            <Productstoreslist data={product.pricelist} />
                            <Productsdescription data={product.desc} />
                            <Productsreviews />
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                    </div>
                    <div id='adds' className="col-2">

                    </div>
                </div>
            </div>
        </>
    )
}
