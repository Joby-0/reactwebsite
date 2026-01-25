import { Placeholder, PlaceholderButton } from "react-bootstrap";

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
    const activeFilterLabels = [];

    // Store filters
    props.activeFilter.storeIds.forEach(id => {
        // Find label if exists, else fallback to id
        const option = props.filtersdata
            .find(f => f.filterTitle.toLowerCase() === "stores")
            ?.filterOptions.find(o => o.value === id);

        activeFilterLabels.push({
            label: option?.name || id,
            type: "store",
            value: id
        });
    });

    // Attribute filters
    props.activeFilter.attributeValueIds.forEach(id => {
        const option = props.filtersdata
            .flatMap(f => f.filterOptions)
            .find(o => o.value === id);

        activeFilterLabels.push({
            label: option?.name || id,
            type: "attribute",
            value: id
        });
    });



    const removeFilter = (filterKey, value) => {
        props.removeFilter(filterKey, value)
    }
    const OrderChange = (option) => {
        const mappedValue = sortMapping[option];
        props.OrderChange(mappedValue);
    };

    console.log(activeFilterLabels);

    return (
        <>
            {props.loading ? (
                <div className="p-1 d-flex justify-content-between border-bottom">
                    <div>
                        <Placeholder as="p" animation="wave" className="m-0" style={{ width: "100px", height: "1rem" }} />
                    </div>
                    <div>
                        <PlaceholderButton variant="secondary" style={{ width: "120px", height: "2rem" }} />
                    </div>
                </div>
            ) : (
                <>
                    {/* Product count + sort */}
                    <div className="p-1 d-flex justify-content-between border-bottom">
                        <div>
                            <p className="m-0">{props.nrOfProduct.dbItemsCount} products</p>
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

                    {/* Active filters */}
                    <div className="mb-4 d-flex flex-wrap">
                        {activeFilterLabels.map(({ label, type, value }) => (
                            <span key={value} className="badge d-flex align-items-center p-1 pe-2 mx-1 my-2 bg-light-subtle border rounded-pill">
                                {label}
                                <span className="vr mx-2"></span>
                                <button
                                    className="btn btn-sm p-0 border-0 bg-transparent"
                                    onClick={() => removeFilter(type, value)}
                                    aria-label={`Remove ${label}`}
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </span>
                        ))}
                    </div>


                </>
            )}
        </>
    );
}
