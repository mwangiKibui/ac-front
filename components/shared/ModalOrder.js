//React
import React,{Component} from 'react';
//third-party
import {connect} from 'react-redux';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
//components
import {requestOrder,fetchOvo} from '../../store/bs';
import {fetchUser} from '../../store/user';
import ModalAccount from './ModalAccount'

class ModalOrder extends Component {

    state = {
        message:"",
        location:"",
        product:this.props.product,
        action:'Request delivery',
        error:"",
        response:"",
        redirect:false,
        isOpen:false
    };
    toggle = () => this.setState({isOpen:!this.state.isOpen});
    onChange = e => {
        
        
        return this.setState({
            [e.target.name] : e.target.value
        });

    };
    onSubmit = async e => {

        e.preventDefault();
        this.setState({error:''});
        this.setState({action:'Loading....'})
        let token =  this.props.token;
        if(!token) return this.setState({isOpen:true});
        let {message,location} = this.state;
        if(!message || !location) return this.setState({error:'Fill out all the details',action:'Request delivery'});
        const data = {message,location,user:this.props.user['_id'],bs:this.props.bs['username']};
        await this.props.requestOrder(data).then(() => {
            return this.setState({
                response:this.props.message,error:'',message:'',location:'',action:'Requested'
             });
        }).catch(console.log);
    };

    render(){
    const {product} = this.state;
 
    return (
        
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>
             <h5 className="details_heading">Request for {product['name']} delivery</h5>
          </ModalHeader>
          <ModalBody>
              <form onSubmit={this.onSubmit}>
                 <div className="form-group">
                     {
                         this.state.error ? (
                             <div className="alert alert-danger">{this.state.error}</div>
                         ) : null
                     }
                     {
                         this.state.response ? (
                             <div className="alert alert-success">{this.state.response}</div>
                         ) : null
                     }
                     <div className="form-group">
                         <label htmlFor="message">What are you ordering?</label>
                         <textarea name="message"
                         className="form-control"
                         onChange={this.onChange}
                         placeholder={`e.g ${product['name']}`}
                         value={this.state.message}
                         rows="5"
                         cols="40"
                         />
                     </div>
                     <div className="form-group">
                         <label htmlFor="location">Where are you at?</label>
                         <input type="text" name="location" onChange={this.onChange}
                         value={this.state.location}
                         className="form-control"
                         placeholder="e.g victoria hostels"
                         />
                     </div>
                     <div className="form-group">
                         <input type="submit" onClick={this.onSubmit} className="btn btn-outline-success" value={this.state.action}/>
                     </div>
                 </div>
              </form>
              <ModalAccount isOpen={this.state.isOpen} toggle={this.toggle}/>
          </ModalBody>
          <ModalFooter>
              <button className="btn btn-outline-danger" onClick={this.props.toggle}>close</button>
          </ModalFooter>
        </Modal>
    )
}};
const mapToProps = state => ({
    user:state.user.user,
    token:state.user.message,
    user_loading:state.user.loading,
    loading:state.bs.loading,
    message:state.bs.message,
    bs:state.bs.bs
});
const dispatchToProps = {
    requestOrder,
    fetchOvo,
    fetchUser
};
export default connect(mapToProps,dispatchToProps)(ModalOrder);