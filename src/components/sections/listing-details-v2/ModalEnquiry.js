import React, { useState } from 'react'
// import Modal from 'react-modal'
import './Form.css'

import Form from './Form'
import ContactUsForm from './ContactUsForm'



function ModalEnquiry() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>


            <div className="container">
                <button className="fixed-btn " data-target="#mymodal" data-toggle="modal">E <br/>n<br/>q<br/>u<br/>i<br/>r<br/>y</button>
               
                <div className="modal fade" id="mymodal"   >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header ">
                                <h3 className="text ">Enquiry</h3>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">&times;</button>
                            </div>
                            <div className="modal-body">
                                {/* <Form /> */}
                                <ContactUsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*
            
                         Working code
             <div className="container">
                <button className="fixed-btn" data-target="#mymodal" data-toggle="modal" onClick = {() => setModalIsOpen(true)}>Open Modal</button>
                <Modal
                isOpen={modalIsOpen} 
                shouldCloseOnOverlayClick={false} 
                onRequestClose ={() => setModalIsOpen(false)}
                style={
                    {
                        backgroundColor:'grey',
                        overlay:{
                            backgroundColor:'grey'
                        },
                        content:{
                            color:'navy'
                        }
                    }
                }
                > 
                    <div>
                        <button className="btn-close text-center" onClick = {() => setModalIsOpen(false)}>close</button>
                        <Form />
                    </div>
                        
                </Modal>
                </div> */}

        </>
    )
}

export default ModalEnquiry
