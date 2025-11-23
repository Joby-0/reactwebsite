
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

import { _productService } from "../services/productservice";



export default function Modalstoreinfo(props) {
  const [storeInfo, setStoreInfo] = useState(null)



  const handleModal = (value) => {

    props.handleModal(value)
  };


  useEffect(() => {
    if (!props.show || !props.storeId) return; // Only fetch when modal is open AND we have an ID

    (async () => {
      try {
        const info = await _productService.readStoreInfoAsync(props.storeId);
        setStoreInfo(info);
      } catch (err) {
        console.error("Failed to load store info:", err);
      }
    })();
  }, [props.show, props.storeId]);
  return (
    <>
      <Modal show={props.show} onHide={() => handleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{storeInfo?.storeName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!storeInfo ? (
            <div className="text-center py-4">Loading store info...</div>
          ) : (
            <>
              <div className="row g-0 border-bottom py-3 pt-0">
                <div className="col">Buy alternatives</div>
                <div className="col-6 text-end">
                  {storeInfo.payMethods?.length > 0
                    ? storeInfo.payMethods.map(p => p.payMethodName).join(", ")
                    : "N/A"}
                </div>
              </div>

              <div className="row g-0 border-bottom py-3">
                <div className="col">Shipping</div>
                <div className="col-6 text-end">
                  {storeInfo.delivery?.length > 0
                    ? storeInfo.delivery.map(d => d.deliveryName).join(", ")
                    : "N/A"}
                </div>
              </div>

              <div className="row g-0 border-bottom py-3">
                <div className="col">Shipping alternatives</div>
                <div className="col-6 text-end">
                  {storeInfo.delivery?.length > 0
                    ? storeInfo.delivery.map(d => `${d.estimatedDays} days`).join(", ")
                    : "N/A"}
                </div>
              </div>

              <div className="row g-0 border-bottom py-3">
                <div className="col">Subscription</div>
                <div className="col-6 text-end">
                  {storeInfo.subscriptionAvailable ? "Yes" : "No"}
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button
            href={storeInfo?.storeLink} type="button" className="btn btn-primary" target="_blank" rel="noreferrer">
            Buy on {storeInfo?.storeName}
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}
