import React from 'react'

export default function Productstoreslist(props) {

    return (
        <section id="prices">
            {props.data.map((item, index) => (
                <div key={index} className="p-2 mb-4 bg-body-tertiary rounded-3" id="companyListitem">
                    <div className="row align-items-center">
                        <div className="col-auto d-flex justify-content-center">
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#compandyInfoModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        </div>
                        <div className="col">
                            <h2>{item.company}</h2>
                            <a href={item.productUrl}>{item.productName}</a>
                        </div>
                        <div className="col-auto d-flex">
                            <h3 className="mx-3">{item.price}</h3>
                            <a href={item.storeUrl} className="btn btn-primary align-middle">To store &gt;</a>
                        </div>
                    </div>
                </div>
            ))}

        </section>
    )
}

