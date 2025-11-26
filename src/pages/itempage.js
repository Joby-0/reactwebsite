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

import ModalWriteAreview from '../components/modalWriteAreview';
import ModalShowAllReviews from '../components/modalShowAllReviews';

import { _productService } from "../services/productservice";
import { Placeholder } from 'react-bootstrap';

export default function Itempage(props) {
    const { shortKey } = useParams();
    const [data, setData] = useState();
    const [reviewdata, setReviewdata] = useState([]);
    const [loading, setLoading] = useState(true);


    //store modal 
    const [show, setShow] = useState(false);
    const [clickstore, setClickstore] = useState(null)
    const handleModal = (value) => {
        setShow(value);
    };
    //write review modal
    const [showReviewModal, setShowReviewModal] = useState(false)
    const handleReviewModal = (value) => {
        setShowReviewModal(value);
    }
    const onSubmitReview = async (value) => {

        await _productService.createReviewAsync(shortKey, {
            starRating: value.starRating,
            comment: value.comment,
            userId: "9545e273-6a73-4366-8458-00059d1befc6",
            productId: data.item.productId
        });
        //to do a some kind of alert that it succeded

    };

    //all reviews modal
    const [showReviews, setShowReviews] = useState(false)
    const handleAllReivewsModal = (value) => {
        setShowReviews(value);
    }

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
                const products = await _productService.readProductAsync(shortKey);
                setData(products);
                setLoading(false);
                const reviewData = await _productService.readReviewsAsync({
                    shortKey: shortKey,
                    pageNumber: 0,
                    pageSize: 3,
                    includeStats: true
                });

                setReviewdata(reviewData);
            } catch (err) {
                console.error("Failed to load product or reviews:", err);
            }
        };

        fetchProducts();
    }, [shortKey, activeStorefilter]);


    return (
        <>
            <Breadcome />
            <div className="container">
                <div className="row">
                    <div className="col">
                        {loading ? (
                            <Placeholder as="div" animation="glow">
                                <Placeholder  style={{ width: "100%", height: 300, marginBottom: "1.5rem" }} />
                                <Placeholder  style={{ width: "100%", height: 100, marginBottom: "1.5rem" }} />
                                <Placeholder  style={{ width: "100%", height: 100, marginBottom: "1.5rem" }} />
                                <Placeholder  style={{ width: "100%", height: 300, marginBottom: "0.5rem" }} />
                            </Placeholder>
                        ) : (
                            <>
                                <Productshowcase data={data.item} />
                                <Productnavmenu active={activeSection} onNavigate={scrollTo} />


                                <div ref={storesRef}>
                                    <Productstorefilter activeStorefilter={activeStorefilter} toggleStoreFilter={toggleStoreFilter} removeFilter={removeFilter} activeCurrency={activeCurrency} handleCurChange={handleCurChange} storeOrder={storeOrder} storeOrderChange={storeOrderChange} />
                                    <Productstoreslist data={data.item.storeProducts} handleModal={handleModal} setClickstore={setClickstore} />
                                    <Modalstoreinfo show={show} handleModal={handleModal} storeId={clickstore} />

                                </div>
                                <div ref={reviewsRef}>
                                    <Productsreviews reviewData={reviewdata} ReviewModal={handleReviewModal} reviewsModal={() => handleAllReivewsModal(true)} />
                                    <ModalWriteAreview showReviewModal={showReviewModal} handleReviewModal={handleReviewModal} onSubmitReview={onSubmitReview} />
                                    <ModalShowAllReviews showReviews={showReviews} onClose={() => handleAllReivewsModal(false)} reviews={reviewdata.pageItems} productId={data.item.productId} />
                                </div>
                                <div ref={descriptionRef}>
                                    <Productdescription />
                                </div>
                                <div ref={specificationsRef}>
                                    <Productsspecifications data={data.item.attributes} />
                                </div>
                            </>
                        )}
                    </div>
                    <div id='adscolumn' className="col-2 bg-body-tertiary"></div>
                </div>
            </div>
        </>
    )
}
