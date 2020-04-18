import React,{useState} from 'react';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';

import {FacebookIcon,FacebookShareButton,TwitterIcon,TwitterShareButton,
        WhatsappIcon,WhatsappShareButton,TelegramIcon,TelegramShareButton} from 'react-share';


const ModalShare = ({message,link,title,isOpen,toggle}) => {

    
    const [copied,setCopied] = useState(false);
    const copy = (e) => {
        e.preventDefault();
        let text = document.getElementById("inputLink");
        text.select();
        text.setSelectionRange(0,99999);

        document.execCommand("copy");
        return setCopied(true);
    }

    return (
        <>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>
             <h4 className="modals_heading">{message}</h4>
          </ModalHeader>
          <ModalBody>
              
             <ul className="share_channels">
                <li className="share_channel">
                <FacebookShareButton url={link} quote={title} hashtag="allcomrades">
                    <FacebookIcon className="share_channel_icon" size={32} round="true" />
                </FacebookShareButton>
                </li>
                <li className="share_channel">
                    <TwitterShareButton url={link} title={title}>
                        <TwitterIcon className="share_channel_icon" size={32} round='true' />
                    </TwitterShareButton>
                </li>
                <li className="share_channel">
                    <WhatsappShareButton url={link} title={title} separator=" click here ">
                    <WhatsappIcon className="share_channel_icon" size={30} round="true"/>
                    </WhatsappShareButton>
                </li>
                <li className="share_channel">
                    <TelegramShareButton url={link} title={title}  >
                    <TelegramIcon className="share_channel_icon" size={30} round="true" />
                    </TelegramShareButton>
                </li>
             </ul>
             <br />
             <br />
             {/** the form for copying the link */}
             <form>
                 <div className="input-group">
                     <input type="text"
                     id="inputLink"
                     className="form-control"
                     name="link"
                     value={link}
                     />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={copy}>
                            {
                                copied ? 'copied' : 'copy'
                            }
                        </button>
                    </div>
                 </div>

             </form>
             

          </ModalBody>
          <ModalFooter>
              <button className="btn btn-outline-danger" onClick={toggle}>close</button>
          </ModalFooter>
        </Modal>
        </>
    )
};

export default ModalShare;