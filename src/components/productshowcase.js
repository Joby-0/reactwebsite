import React, { useState } from 'react';
import { Link } from 'react-router';

export default function Productshowcase(props) {    
    const [mainImage, setMainImage] = useState(props.data.thumbnailImage);


    
    
    
    const thumbnails = props?.productImages
    // const getHighestPrice = (storeProducts) => {
    //     const prices = storeProducts
    //       .map(store => parseInt(store.price?.replace(/[^\d]/g, ''))) // Remove 'kr' or nulls
    //       .filter(price => !isNaN(price)); // Remove invalid ones
      
    //     return Math.max(...prices);
    //   };

    const handleImageChange = (imgUrl) => {
        setMainImage(imgUrl);
    };

    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        {/* Left Side (Thumbnails) */}
                        <div id="smallimg" className="col-2 d-flex flex-column gap-2">
                            {thumbnails?.map((thumb, index) => (
                                <img
                                    key={index}
                                    src={thumb}
                                    height="50"
                                    width="50"
                                    className={`thumbnail ${mainImage === thumb ? 'active' : ''}`}
                                    onClick={() => handleImageChange(thumb)}
                                    style={{ cursor: 'pointer' }}
                                    alt={`Thumbnail ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Right Side (Main Image) */}
                        <div className="col position-relative">
                            <img
                                src={mainImage}
                                height="100%"
                                width="100%"
                                id="mainImage"
                                className="main-image"
                                alt="Main Product"
                            />
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="row">
                        <h1>{props.data.productName}</h1>
                    </div>
                    <div className="row mb-2">
                        <div className="col-auto">
                            <button className="btn btn-sm  "><i class="bi bi-star-fill"></i> {props.data.avgRating}</button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-sm "><i class="bi bi-bell"></i> Watch price</button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-sm ">Compare</button>
                        </div>
                    </div>
                    <div className="row">
                        <p>
                            {props.data.shortdesc}...  
                            <Link href="#">read more</Link>
                        </p>
                    </div>
                    <div className="row">
                        <p>Produkt price range {props.data.productPrice} - 
                            {/* {getHighestPrice(props.data.pricelist)}  */}
                            sek</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
