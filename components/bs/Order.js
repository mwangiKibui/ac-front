//React
import React,{Component} from 'react';
//Third-party
import {connect} from 'react-redux';
//components
import {requestOrder} from '../../store/bs';
import {fetchUser} from '../../store/user';
import ModalAccount from '../shared/ModalAccount';

class Order extends Component{
    state = {
        isOpen:false,
        user:"",
        bs:this.props.bs['username'],
        message:'',
        location:'',
        response:'',
        error:"",
        action:"request delivery"
    };
    toggle = () => this.setState({isOpen:!this.state.isOpen});
    onChange = e => {
        return this.setState({[e.target.name] : e.target.value })
    };
    onSubmit = async e => {

        e.preventDefault();
        let token = this.props.token;
        if(!token) return this.setState({isOpen:true});
        this.setState({action:'Requesting....'})
        await this.props.fetchUser(token).then( async () => {

            this.setState({error:''});
            let {message,location,bs} = this.state;
            let user = this.props.user['_id'];
            if(!message || !location) return this.setState({error:'Fill out all the details',action:'try again'});
            const data = {message,location,user,bs};
            await this.props.requestOrder(data).then(() => {
                return this.setState({
                    response:this.props.message,error:'',message:'',location:'',action:'Requested'
                 });
            }).catch(console.log);


        }).catch(console.log);
    };
    render(){
        return(
            <section className="manual_order">
                <h6 className="bs_pg_heading">Place your custom order here</h6>
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
                     <div className="form-group order_message">
                         <label htmlFor="message">What are you ordering?</label>
                         <textarea name="message"
                         className="form-control"
                         onChange={this.onChange}
                         placeholder={`e.g i want chips plain`}
                         value={this.state.message}
                         rows="5"
                         cols="40"
                         />
                     </div>
                     <div className="form-group order_location">
                         <label htmlFor="location">Where are you at?</label>
                         <input type="text" name="location" onChange={this.onChange}
                         value={this.state.location}
                         className="form-control"
                         placeholder="e.g at victoria hostels"
                         />
                     </div>
                     <div className="form-group">
                         <input type="submit" onClick={this.onSubmit} className="btn btn-outline-success" value={this.state.action}/>
                     </div>
                 </div>
              </form>
              <ModalAccount isOpen={this.state.isOpen} toggle={this.toggle} />
            </section>
        )
    }
};
const mapToProps = state => ({
    user:state.user.user,
    token:state.user.message,
    user_loading:state.user.loading,
    bs:state.bs.bs,
    loading:state.bs.loading,
    message:state.bs.message
});
const dispatchToProps = {
    requestOrder,
    fetchUser
};
export default connect(mapToProps,dispatchToProps)(Order);