
export default function Productstoreslist(props) {

    const handleModal = (value, item) => {
        props.handleModal(value);
        props.setClickstore(item.storeId)
    };

    

    return (
        <>
            <section id="prices">
                {props.data.map((item, index) => (
                    <div key={index} className="p-2 mb-4 bg-body-tertiary rounded-3" id="companyListitem">
                        <div className="row align-items-center">
                            <div className="col-auto d-flex justify-content-center">
                                <button type="button" className="btn" onClick={() => handleModal(true, item)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </button>
                            </div>
                            <div className="col">
                                <div className="d-flex">
                                    <img className="rounded-circle" height={50} width={50} src={item.storeLogo} alt="Logo" />
                                    {/* <img  height={50} width={150} src={item.storeLogo} alt="Logo" /> */}
                                    
                                    <h2 className="ps-2 pe-1">
                                        {item.storeName}
                                    </h2>
                                    {/* flag fix  */}
                                    <span className="pe-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                            <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
                                            <g mask="url(#a)">
                                                <path fill="#0052b4" d="M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7 22.6 35.1V512H200.3l-32-19.8-34.7 19.8H0V289.4l22.1-33.3L0 222.6z" />
                                                <path fill="#ffda44" d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0z" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>

                                <a className="fw-semibold" href={item.storeProductLink}>{item.storeProductName}</a>
                            </div>
                            <div className="col-auto d-flex align-items-center">
                                <h3 className="m-3 fw-semibold">{item.storePrice} {item.storeCurrency}</h3>
                                <a href={item.storeProductLink} className="btn btn-primary align-middle">To store &gt;</a>
                            </div>
                        </div>
                    </div>
                ))}

            </section>
        </>
    )
}

