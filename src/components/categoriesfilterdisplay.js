export default function Categoriesfilterdisplay(props) {
    const sortMapping = {
    "Recommended": "recomended",
    "Trending": "trending",
    "Price ascending": "price_asc",
    "Price descending": "price_desc",
    "Name": "name",
    "Rating": "rating"
  };

    // Flatten storeIds and attributeValueIds into display names
    const activeFilterLabels = [
        ...(props.activeFilter.storeIds?.map(id => `Store: ${id}`) || []),
        ...(props.activeFilter.attributeValueIds?.map(id => `Attr: ${id}`) || [])
    ];

    const removeFilter = (filterKey) => {
        props.removeFilter(filterKey)
    }
    const OrderChange = (option) => {
        const mappedValue = sortMapping[option];
        props.OrderChange(mappedValue);
    };


    return (
        <>
            <div className="p-1 d-flex justify-content-between border-bottom">
                <div>
                    <p className="m-0">{props.nrOfProduct} products</p>
                </div>
                <div>
                    <div className="dropdown">
                        <button
                            className="btn dropdown-toggle p-0 px-2"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {props.activeOrder}
                        </button>
                        <ul className="dropdown-menu">
                            {['Recommended', 'Trending', 'Price ascending', 'Price descending', 'Name', 'Rating'].map((option) => (
                                <li key={option}>
                                    <button
                                        onClick={() => OrderChange(option)}
                                        className={`dropdown-item ${props.activeOrder === option ? 'active' : ''}`}
                                    >
                                        {option}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="mb-4 d-flex rounded-3 flex-wrap">
                    {activeFilterLabels.map(label => (
                        <span key={label} style={{ width: 'fit-content' }} className="badge d-flex align-items-center p-1 pe-2 mx-1 my-3 text-light-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                            {label}
                            <span className="vr mx-2"></span>
                            <button className='btn btn-sm p-0 border-0 bg-transparent text-light-emphasis' style={{ lineHeight: 0 }} onClick={() => removeFilter(label)} aria-label={`Remove ${label}`}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}
