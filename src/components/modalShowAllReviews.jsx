import React, { useEffect, useRef, useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import Review from "./reviewComponent.jsx";
import { _productService } from "../services/productservice";

const ModalShowAllReviews = ({ showReviews, onClose, productId }) => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const containerRef = useRef(null);

  const loadReviews = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const data = await _productService.readReviewsAsync({
        productId,
        pageNumber: page,
        pageSize: 20,
        includeStats: false,
      });

      setReviews(prev => [...prev, ...data.pageItems]);
      setHasMore(data.pageItems.length > 0);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error("Error loading reviews:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (showReviews) {
      setPage(0);
      setHasMore(true);
      loadReviews();
    }
  }, [showReviews]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
        loadReviews();
      }
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [reviews, loading, hasMore]);

  return (
    <Modal show={showReviews} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>All Reviews</Modal.Title>
      </Modal.Header>

      <Modal.Body
        ref={containerRef}
        style={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        {reviews.map((review, i) => (
          <Review
            key={i}
            Created_at={review.created_at}
            profile={review.ProfileImage}
            name={review.userName}
            rating={review.starRating}
            text={review.comment}
          />
        ))}

        {loading && (
          <div className="text-center p-3">
            <Spinner animation="border" />
          </div>
        )}

        {!hasMore && reviews.length > 0 && (
          <div className="text-center p-3 text-muted">No more reviews</div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalShowAllReviews;
