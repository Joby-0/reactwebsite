
import React, { useEffect, useState } from 'react'
import { Button, Modal, Placeholder } from 'react-bootstrap';

import { _productService } from "../services/productservice";



export default function Modalstoreinfo(props) {
  const [storeInfo, setStoreInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  const InfoRow = ({ label, value }) => (
    <div className="row g-0 border-bottom py-3">
      <div className="col">{label}</div>
      <div className="col-6 text-end">{value}</div>
    </div>
  );

  const PlaceholderRow = ({ label }) => (
    <div className="row g-0 border-bottom py-3">
      <div className="col">{label}</div>
      <div className="col-6 text-end">
        <Placeholder animation="glow">
          <Placeholder as="div" style={{ width: "50%", height: "1rem" }} />
        </Placeholder>
      </div>
    </div>
  );


  const handleModal = (value) => {

    props.handleModal(value)
  };


  useEffect(() => {
    if (!props.show || !props.storeId) return; // Only fetch when modal is open AND we have an ID

    (async () => {
      try {
        const info = await _productService.readStoreInfoAsync(props.storeId);
        setStoreInfo(info);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load store info:", err);
      }
      finally {
        // setLoading(false);
      }
    })();
  }, [props.show, props.storeId]);

  return (
    <>
      <Modal show={props.show} onHide={() => handleModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{storeInfo?.storeName || "Loading..."}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {loading ? (
            <>
              <PlaceholderRow label="Buy alternatives" />
              <PlaceholderRow label="Shipping" />
              <PlaceholderRow label="Shipping alternatives" />
              <PlaceholderRow label="Subscription" />
            </>
          ) : (
            <>
              <InfoRow
                label="Buy alternatives"
                value={
                  storeInfo?.payMethods?.length > 0
                    ? storeInfo.payMethods.map(p => p.payMethodName).join(", ")
                    : "N/A"
                }
              />
              <InfoRow
                label="Shipping"
                value={
                  storeInfo?.delivery?.length > 0
                    ? storeInfo.delivery.map(d => d.deliveryName).join(", ")
                    : "N/A"
                }
              />
              <InfoRow
                label="Shipping alternatives"
                value={
                  storeInfo?.delivery?.length > 0
                    ? storeInfo.delivery.map(d => `${d.estimatedDays} days`).join(", ")
                    : "N/A"
                }
              />
              <InfoRow
                label="Subscription"
                value={storeInfo?.subscriptionAvailable ? "Yes" : "No"}
              />
            </>
          )}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center">
          <Button
            href={storeInfo?.storeLink}
            type="button"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
            disabled={!storeInfo}
          >
            {storeInfo ? `Buy on ${storeInfo.storeName}` : "Loading..."}
          </Button>
        </Modal.Footer>
      </Modal>



    </>
  )
}
