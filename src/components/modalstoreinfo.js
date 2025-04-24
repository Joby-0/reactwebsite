
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function Modalstoreinfo(props) {
  const [storeInfo, setStoreInfo] = useState(null)

  const handleModal = (value) => {
    
    props.handleModal(value)
  };
  
  useEffect(() => {
    (async () => {
      setStoreInfo(props.storeInfo)
    })();
  })

  return (
    <>
      <Modal show={props.show} onHide={() => handleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{storeInfo?.company}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="row g-0 border-bottom py-3 pt-0">
            <div class="col">Buy alternitives</div>
            <div class="col-6 text-end">
              ddddddddd dddddd d d d d d
            </div>
          </div>
          <div class="row g-0 border-bottom py-3">
            <div class="col">shipping</div>
            <div class="col-6 text-end">
              ddd dd dd dd dd d ddd ddd ddd dd ddd dd dd
            </div>
          </div>
          <div class="row g-0 border-bottom py-3">
            <div class="col">shipping alternitives</div>
            <div class="col-6 text-end">
              dd dd dd dd
            </div>
          </div>
          <div class="row g-0 border-bottom py-3">
            <div class="col">Subscription</div>
            <div class="col-6 text-end">
              Yes
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button type="button" class="btn btn-primary">Buy on {storeInfo?.company}</Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}
