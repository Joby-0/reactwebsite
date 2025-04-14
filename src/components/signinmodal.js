import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Signinmodal(props) {
    const [show, setShow] = useState(false);


    const handleModal = (value) => {
        setShow(value);
        props.handleModal(value)
    };

    return (
        <>
            <Modal show={props.show} onHide={() => handleModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign up for free</Modal.Title>
                </Modal.Header>
                <Modal.Body><form>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control rounded-3"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control rounded-3"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">
                        Sign up
                    </button>
                    <small className="text-body-secondary">
                        By clicking Sign up, you agree to the terms of use.
                    </small>
                    <hr className="my-4" />
                    <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                        Sign up with Twitter
                    </button>
                    <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="button">
                        Sign up with Facebook
                    </button>
                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                        Sign up with GitHub
                    </button>
                </form></Modal.Body>

            </Modal>
        </>
    )
}
