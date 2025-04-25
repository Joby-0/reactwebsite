import React, { useState, useEffect, useRef } from 'react'
import Productshowcase from '../components/productshowcase'
import Productnavmenu from '../components/productnavmenu'
import Productstoreslist from '../components/productstoreslist'
import Productsdescription from '../components/productsdescription'
import Productsreviews from '../components/productsreviews'
import Data from '../services/data'
import { useParams } from "react-router";
import Modalstoreinfo from '../components/modalstoreinfo'
import Breadcome from '../components/breadcome'



export default function Itempage(props) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const [show, setShow] = useState(false);
    const [clickstore, setClickstore] = useState(null)
    const handleModal = (value) => {
        setShow(value);
    };

    const [activeSection, setActiveSection] = useState('stores');

    const storesRef = useRef(null);
    const descriptionRef = useRef(null);
    const reviewsRef = useRef(null);

    const sectionRefs = {
        stores: storesRef,
        description: descriptionRef,
        reviews: reviewsRef,
    };
    const scrollTo = (key) => {
        const offset = -80; // Adjust based on your header
        const el = sectionRefs[key].current;
        const y = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(key);
    };




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
                <div className="row align-items-center">
                    <div className="col">
                        {product ? (
                            <>
                                <Productshowcase data={product} />
                                <Productnavmenu active={activeSection} onNavigate={scrollTo} />

                                <div ref={storesRef}>
                                    <Productstoreslist data={product.pricelist} handleModal={handleModal} setClickstore={setClickstore} />
                                    <Modalstoreinfo show={show} handleModal={handleModal} storeInfo={clickstore} />

                                </div>

                                <div ref={descriptionRef}>
                                    <Productsdescription data={product.desc} />
                                </div>

                                <div ref={reviewsRef}>
                                    <Productsreviews />
                                </div>
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
