import React, { useState } from 'react';

export default function Productshowcase(props) {
    console.log(props.data);
    
    const [mainImage, setMainImage] = useState(props.data.image);
    
      const thumbnails = props?.data?.thumbnails
        
    
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
                            {thumbnails.map((thumb, index) => (
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
                        <h1>Apple iPhone 16 Pro Max, 256GB</h1>
                    </div>
                    <div className="row my-2">
                        <div className="col-auto">
                            <button className="btn btn-secondary">4.9</button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-primary">Watch price</button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-danger">x</button>
                        </div>
                    </div>
                    <div className="row">
                        <p>
                            iPhone 16 Pro Max erbjuder excellens med trippelkamera, A18 Pro Bionic-chip, 5G,
                            stort batteri, samt trådbunden och MagSafe-laddning.{' '}
                            <a href="#">read more</a>
                        </p>
                    </div>
                    <div className="row">
                        <p>Produkt price range 16090 - 17490 sek</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
