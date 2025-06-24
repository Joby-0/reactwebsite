import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import '../css/productstorefilter.css'


export default function Productstorefilter(props) {
    // const [selectedSortWay, setSelectedSortWay] = useState('Recondmended')
    const handleChange = (e) => {
        props.storeOrderChange(e.target.value)
    };
    const handleChangeStoreFilter = (e) => {
        props.activeStorefilter(e.target.value)
    }
    return (
        <div className="p-2 mb-4 bg-body-tertiary rounded-3">

            <div className='row'>
                <div className='col-auto'>
                    <button className="btn btn-secondary position-relative" type="button" >
                        <i class="bi bi-sliders2"></i>
                        <span id='filteractivedot' class="position-absolute top-0 start-100 translate-middle p-1 bg-primary border border-primary rounded-circle">
                            <span class="visually-hidden">filter active</span> 
                            {/* fix fix */}
                        </span>
                    </button>
                </div>
                <div className='col-auto'> <div className="dropdown">
                    <button className="btn btn-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Country
                    </button>
                    <ul id='selectedcountrydropdownmenu' className="dropdown-menu   border-0 mt-1 z-100">
                        <li className='dropdown-item'><span class="mx-1">USA</span></li>
                        <li className='dropdown-item'><span class="mx-1">Germany</span></li>
                        <li className='dropdown-item'><span class="mx-1">Sweden</span></li>
                        <li className='dropdown-item'><span class="mx-1">UK</span></li>
                    </ul>
                </div></div>
                <div className='col d-flex justify-content-end'>
                    <div className="dropdown">
                        <button className="btn btn-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {props.storeOrder}
                        </button>
                        <ul id='selectedSortWaydropdownmenu' className="dropdown-menu dropdown-menu-end  border-0 mt-1 z-100">
                            <Form>
                                {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="p-2">
                                        <Form.Check
                                            type={type}
                                            name="group1"
                                            id={`default-${type}-1`}
                                            label={`Recondmended`}
                                            value="Recommended"
                                            onChange={handleChange}
                                            className="full-radio"
                                        />
                                        <Form.Check
                                            type={type}
                                            name="group1"
                                            id={`default-${type}-2`}
                                            label={`Price`}
                                            value="Price"
                                            onChange={handleChange}
                                            className="full-radio"
                                        />
                                        <Form.Check
                                            type={type}
                                            name="group1"
                                            id={`default-${type}-3`}
                                            label={`country`}
                                            value="country"
                                            onChange={handleChange}
                                            className="full-radio"
                                        />
                                    </div>
                                ))}
                            </Form>
                        </ul>
                    </div></div>

            </div>



        </div>
    )
}
