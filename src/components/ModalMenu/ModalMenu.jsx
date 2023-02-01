import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from "./ModalMenu.styled";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ setIsOpen, children }) => {
    return createPortal(
        <Overlay onClick={() => setIsOpen(false)} > 
          <ModalWindow>{children}</ModalWindow>  
        </Overlay>
    ), modalRoot
}

export default Modal;