import React, { useState, useEffect, useRef, useMemo } from 'react'
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

import { useAuth } from "../Context/AuthContext";
import { convertPrice } from '../services/Helpers/currencyConverter';



export default function Itempage(props) {
    const { shortKey } = useParams();
    const [data, setData] = useState();
    const [reviewdata, setReviewdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, isLoggedIn } = useAuth();



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
        console.log(user);

        await _productService.createReviewAsync(shortKey, {
            starRating: value.starRating,
            comment: value.comment,
            userId: user.userId,
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
    const [storeOrder, setStoreOrder] = useState('Recommended');

    const storeOrderChange = (value) => {
        console.log(value);
        
        setStoreOrder(value);
    };
    const [activeStorefilter, setActiveStorefilter] = useState([])
    const [activeCurrency, setActiveCurrency] = useState('SEK')

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
    const handleCurChange = (cur) => setActiveCurrency(cur);



    const storeProducts = data?.item?.storeProducts ?? [];

    const filteredAndSortedStores = useMemo(() => {
        let stores = [...storeProducts];

        if (activeStorefilter.length > 0) {
            stores = stores.filter(store =>
                activeStorefilter.includes(store.storeCountry)
            );
        }


        switch (storeOrder) {
            case "PriceAsc":
                stores.sort((a, b) => convertPrice(a.storePrice, a.storeCurrency, activeCurrency) - convertPrice(b.storePrice, b.storeCurrency, activeCurrency));
                break;
            case "PriceDesc":
                stores.sort((a, b) => convertPrice(b.storePrice, b.storeCurrency, activeCurrency) - convertPrice(a.storePrice, a.storeCurrency, activeCurrency));
                break;
            case "Country":
                stores.sort((a, b) => a.storeCountry.localeCompare(b.storeCountry));
                break;
            case "Rating":
                stores.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            case "Delivery":
                stores.sort((a, b) => (a.deliveryTime || 0) - (b.deliveryTime || 0));
                break;
            default:
                // Recommended or default order
                break;
        }


        return stores;
    }, [storeProducts, activeStorefilter, storeOrder]);

    const countryOptions = useMemo(() => {
        return [...new Set(storeProducts.map(store => store.storeCountry))];
    }, [storeProducts]);

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
            {data ? (
                <Breadcome id={data.item.productId} />
            ) : (
                <div>Loading breadcrumbs...</div>
            )}
            <div className="container">
                <div className="row">
                    <div className="col">
                        {loading ? (
                            <Placeholder as="div" animation="glow">
                                <Placeholder style={{ width: "100%", height: 300, marginBottom: "1.5rem" }} />
                                <Placeholder style={{ width: "100%", height: 100, marginBottom: "1.5rem" }} />
                                <Placeholder style={{ width: "100%", height: 100, marginBottom: "1.5rem" }} />
                                <Placeholder style={{ width: "100%", height: 300, marginBottom: "0.5rem" }} />
                            </Placeholder>
                        ) : (
                            <>
                                <Productshowcase data={data.item} />
                                <Productnavmenu active={activeSection} onNavigate={scrollTo} />


                                <div ref={storesRef}>
                                    <Productstorefilter countryOptions={countryOptions} storeOrder={storeOrder} activeStorefilter={activeStorefilter} toggleStoreFilter={toggleStoreFilter} removeFilter={removeFilter} activeCurrency={activeCurrency} handleCurChange={handleCurChange} storeOrderChange={storeOrderChange} />
                                    <Productstoreslist activeCurrency={activeCurrency} data={filteredAndSortedStores} handleModal={handleModal} setClickstore={setClickstore} />
                                    <Modalstoreinfo show={show} handleModal={handleModal} storeId={clickstore} />

                                </div>
                                <div ref={reviewsRef}>
                                    <Productsreviews reviewData={reviewdata} ReviewModal={handleReviewModal} reviewsModal={() => handleAllReivewsModal(true)} />
                                    <ModalWriteAreview isLoggedIn={isLoggedIn()} showReviewModal={showReviewModal} handleReviewModal={handleReviewModal} onSubmitReview={onSubmitReview} />
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
