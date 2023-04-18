import React from "react";


function Modal({closeModal, isOpen=false}) {
    return(
        
        <div className={`modalBox ${isOpen ? 'modalActivate' : 'modalDesactivate'}`}>
            <div className="modal">
                <p className="txtModal">Employee Created ! </p>
                <button className="close-btn" onClick={closeModal}>X</button>
            </div>
        </div>
        
    )
}

export default Modal;