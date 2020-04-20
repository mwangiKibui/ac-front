import React, { useState } from 'react';
//third-party
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
//components
import ModalLogin from './ModalLogin';
import ModalSignup from './ModalSignup';


const ModalAccount = ({isOpen,toggle,url}) => {
    const [login,setLogin] = useState(true);
    const [message,setMessage] = useState('You must login to proceed');
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle} className="text-white">
             {
               message ? (
               <div className="alert alert-success text-white">{message}</div>
               ) : null
             }
          </ModalHeader>
          <ModalBody>
            {
                login ? ( <ModalLogin setLogin={setLogin} toggle={toggle} url={url}/>) : (<ModalSignup setLogin={setLogin} setMessage={setMessage}/>)
            }
          </ModalBody>
          <ModalFooter>
              <button className="btn btn-outline-danger" onClick={toggle}>close</button>
          </ModalFooter>
        </Modal>
    )
};
ModalAccount.defaultProps = {
  url:'/'
}
export default ModalAccount;