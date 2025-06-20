import React from 'react'
import { Form } from 'react-bootstrap'


export default function Productstorefilter() {
    return (
        <div className="p-2 mb-4 bg-body-tertiary rounded-3">

            <div className='row'>
                <div className='col-auto'>price</div>
                <div className='col-auto'>country</div>
                <div className='col'><div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Recondmended
                    </button>
                    <ul class="dropdown-menu">
                        <Form>
                            {[ 'radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check 
                                        type={type}
                                        name="group1"
                                        id={`default-${type}-1`}
                                        label={`Recondmended`}
                                    />
                                    <Form.Check 
                                        type={type}
                                        name="group1"
                                        id={`default-${type}-2`}
                                        label={`Price`}
                                    />
                                    <Form.Check 
                                        type={type}
                                        name="group1"
                                        id={`default-${type}-3`}
                                        label={`country`}
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
