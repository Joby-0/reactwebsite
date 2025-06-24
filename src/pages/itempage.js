import React, { useState, useEffect, useRef, use } from 'react'
import { useParams } from "react-router";

import Productshowcase from '../components/productshowcase'
import Productnavmenu from '../components/productnavmenu'
import Productstoreslist from '../components/productstoreslist'
import Productsspecifications from '../components/productsspecifications'
import Productsreviews from '../components/productsreviews'
import Productstorefilter from '../components/productstorefilter'
import Productdescription from '../components/productdescription';

import Modalstoreinfo from '../components/modalstoreinfo'
import Breadcome from '../components/breadcome'

import Data from '../services/data' //remove when api



export default function Itempage(props) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    //store modal 
    const [show, setShow] = useState(false);
    const [clickstore, setClickstore] = useState(null)
    const handleModal = (value) => {
        setShow(value);
    };

    //click to scroll
    const [activeSection, setActiveSection] = useState('stores');
    const storesRef = useRef(null);
    const descriptionRef = useRef(null);
    const reviewsRef = useRef(null);
    const specificationsRef = useRef(null);

    const sectionRefs = {
        stores: storesRef,
        description: descriptionRef,
        reviews: reviewsRef,
        specifications: specificationsRef
    };
    const scrollTo = (key) => {
        const offset = -80; // Adjust based on your header
        const el = sectionRefs[key].current;
        const y = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(key);
    };

    //store filter
    const [storeOrder, setStoreOrder] = useState('Recommended')
    const [activeStorefilter, setActiveStorefilter] = useState([])
    const storeOrderChange = (e) => {
        setStoreOrder(e)
        //make a api call to change to order
    }
    const storeFilterChange = (e) => {
        setActiveStorefilter(e)
        //make a api call to change what shows with filter
    }

    useEffect(() => {
        (async () => {

            const dataInstance = new Data();
            const product = dataInstance.find(item => item.id.toString() === id); //sen blir det service read product med id
            setProduct(product);
        })();
    }, [id]);


    return (
        <>
            <Breadcome />
            <div className="container">
                <div className="row">
                    <div className="col">
                        {product ? (
                            <>
                                <Productshowcase data={product} />
                                <Productnavmenu active={activeSection} onNavigate={scrollTo} />
                                

                                <div ref={storesRef}>
                                    <Productstorefilter activeStorefilter={activeStorefilter} storeFilterChange={storeFilterChange} storeOrder={storeOrder} storeOrderChange={storeOrderChange}/>
                                    <Productstoreslist data={product.pricelist} handleModal={handleModal} setClickstore={setClickstore} />
                                    <Modalstoreinfo show={show} handleModal={handleModal} storeInfo={clickstore} />

                                </div>
                                <div ref={reviewsRef}>
                                    <Productsreviews />
                                </div>
                                <div ref={descriptionRef}>
                                    <Productdescription/>
                                </div>
                                <div ref={specificationsRef}>
                                    <Productsspecifications data={product.desc} />
                                </div>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div id='adscolumn'  className="col-2 bg-body-tertiary"></div>
                </div>
            </div>
        </>
    )
}
