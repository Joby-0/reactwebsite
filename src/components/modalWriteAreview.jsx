
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import StarRatingInput from "./StarRatingInput";

export default function ModalWriteAreview(props) {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const maxLength = 500;

    const handleReviewModal = (value) => {
        props.handleReviewModal(value);
    };

    const submitReview = () => {
        if (!rating || !comment.trim()) return;

        // Send review data back to parent
        props.onSubmitReview({
            starRating: rating,
            comment: comment.trim()
        });

        // Reset fields
        setRating(0);
        setComment("");

        handleReviewModal(false);
    };
    return (
        <Modal show={props.showReviewModal} onHide={() => handleReviewModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Write a Review</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {/* Rating */}

                <StarRatingInput value={rating} onChange={setRating} />

                {/* Comment */}
                <Form.Group>
                    <Form.Label>Your Review</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Share what you think about this product..."
                        maxLength={maxLength}
                    />
                    <small className="text-muted">
                        {maxLength - comment.length} characters remaining
                    </small>
                </Form.Group>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-between">
                <Button variant="secondary" onClick={() => handleReviewModal(false)}>
                    Cancel
                </Button>

                <Button variant="primary" onClick={submitReview}>
                    Submit Review
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
