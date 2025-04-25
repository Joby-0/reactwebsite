import React from 'react'
import { Link, useLocation } from 'react-router';

export default function Breadcome() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const formatName = (name) =>
        name.replace(/%20/g, " ").replace(/-/g, " ");





    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>

                    {pathnames.map((segment, index) => {
                        // Skip numbers (like IDs)
                        if (!isNaN(segment)) return null;

                        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                        const isLast = index === pathnames.length - 1;

                        return isLast ? (
                            <li key={segment} className="breadcrumb-item active" aria-current="page">
                                {formatName(segment)}
                            </li>
                        ) : (
                            <li key={segment} className="breadcrumb-item">
                                <Link to={routeTo}>{formatName(segment)}</Link>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}

