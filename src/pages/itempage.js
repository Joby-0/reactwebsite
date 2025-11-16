import React, { useState, useEffect, useRef } from 'react'
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
import ProductService from '../services/productservice';



export default function Itempage(props) {
    const { shortKey } = useParams();
    const [data, setData] = useState();
    const [reviews, setReviews] = useState([]);

    const service = new ProductService('https://localhost:7020/api');



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
    const [activeCurrency, setActiveCurrency] = useState('SEK')
    const storeOrderChange = (e) => {
        setStoreOrder(e)
        //make a api call to change to order
    }
    // const storeFilterChange = (e) => {
    //     setActiveStorefilter(e)
    //     //make a api call to change what shows with filter
    // }
    const toggleStoreFilter = (filterKey) => {
        setActiveStorefilter((prev) => {

            const next = prev.includes(filterKey)
                ? prev.filter((k) => k !== filterKey)          // remove
                : [...prev, filterKey];                        // add
            // call your API with next ...
            return next;
        });

    };
    const removeFilter = (filterKey) => setActiveStorefilter((prev) => prev.filter((k) => k !== filterKey));
    const handleCurChange = (cur) => setActiveCurrency(cur.target.value);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await service.readProductAsync(shortKey);
                setData(products);

                const reviewData = await service.readReviewsAsync(shortKey);
                setReviews(reviewData.pageItems);
            } catch (err) {
                console.error("Failed to load product or reviews:", err);
            }
        };

        fetchProducts();
    }, [shortKey, activeStorefilter]);
    console.log(shortKey);
    

    return (
        <>
            <Breadcome />
            <div className="container">
                <div className="row">
                    <div className="col">
                        {data ? (
                            <>
                                <Productshowcase data={data.item} />
                                <Productnavmenu active={activeSection} onNavigate={scrollTo} />


                                <div ref={storesRef}>
                                    <Productstorefilter activeStorefilter={activeStorefilter} toggleStoreFilter={toggleStoreFilter} removeFilter={removeFilter} activeCurrency={activeCurrency} handleCurChange={handleCurChange} storeOrder={storeOrder} storeOrderChange={storeOrderChange} />
                                    <Productstoreslist data={data.item.storeProducts} handleModal={handleModal} setClickstore={setClickstore} />
                                    <Modalstoreinfo show={show} handleModal={handleModal} storeId={clickstore} />

                                </div>
                                <div ref={reviewsRef}>
                                    <Productsreviews reviews={reviews} />
                                </div>
                                <div ref={descriptionRef}>
                                    <Productdescription />
                                </div>
                                <div ref={specificationsRef}>
                                    <Productsspecifications data={data.item.attributes} />
                                </div>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div id='adscolumn' className="col-2 bg-body-tertiary"></div>
                </div>
            </div>
        </>
    )
}
