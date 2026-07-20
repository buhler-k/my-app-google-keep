import './Modal.css';
import '../Form/Form';
import Form from '../Form/Form';

const Modal = (props) => {
    const {isModalOpen} = props;

    return (
        <div className={`modal ${isModalOpen ? "open-modal" : ""}`} >
            <div className="modal-content ">
                <Form edit />
                
            </div>
        </div>
    )
}

export default Modal;