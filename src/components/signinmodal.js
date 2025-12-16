import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import { authService } from "../services/productservice";
import { useAuth } from "../Context/AuthContext";
import { useUI } from '../Context/UiContext';



export default function Signinmodal({ show, handleModal, handleSignUpModal }) {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const { openSignUp } = useUI();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await authService.login({ userNameOrEmail: email, password });
            login(res.item);
            handleModal(false);
        } catch (err) {
            console.error(err);
            alert("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <Modal show={show} onHide={() => handleModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Sign in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input onChange={e => setEmail(e.target.value)}
                            type="email"
                            className="form-control rounded-3"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={e => setPassword(e.target.value)}
                            type="password"
                            className="form-control rounded-3"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">
                        Sign in
                    </button>
                    <small className="text-body-secondary">
                        By clicking Sign in, you agree to the terms of use.
                    </small>
                    <hr className="my-4" />
                    <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                        Sign in with Twitter
                    </button>
                    <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="button">
                        Sign in with Facebook
                    </button>
                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                        Sign in with GitHub
                    </button>
                    <small className="d-block mt-3 text-center">
                        Don’t have an account?{" "}
                        <button
                            type="button"
                            className="btn btn-link p-0"
                            onClick={openSignUp}
                        >
                            Sign up
                        </button>
                    </small>
                </form></Modal.Body>

        </Modal>

    );
}
