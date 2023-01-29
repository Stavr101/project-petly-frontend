import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from "./ModalMenu.styled";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClick }) => {
    return createPortal(
        <Overlay onClick={onClick}> 
          <ModalWindow>{children}</ModalWindow>  
        </Overlay>
    ), modalRoot
}

export default Modal;