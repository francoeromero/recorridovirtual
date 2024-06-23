import React, { Children } from "react";
import '../styles/modal.css';

export default function Modal({ children, isOpen, close }) {
    return (
      <article className={isOpen ? 'modal is-open' : 'modal'}>
        <button className='close-modal' onClick={()=> close()}></button>
        <div className="modal-container">
          {children}
        </div>
      </article>
    )
}