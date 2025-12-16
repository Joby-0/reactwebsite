import Modal from 'react-bootstrap/Modal';
import { useState } from "react";


import { authService } from "../services/productservice";
import { useAuth } from "../Context/AuthContext";

export default function Signupmodal({ show, handleModal }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const { login } = useAuth();
    

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await authService.register({
                userName,
                email,
                password,
                firstName,
                lastName
            });

            const log = await authService.login({ userNameOrEmail: email, password });
            
            login(log.item);
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
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control rounded-3"
                            id="floatingName"
                            placeholder="Full Name"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />
                        <label htmlFor="floatingName">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control rounded-3"
                            id="floatingEmail"
                            placeholder="name@example.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingEmail">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control rounded-3"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">
                        Sign Up
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    );
}
