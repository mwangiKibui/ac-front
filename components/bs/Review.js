//React
import React,{Component} from 'react';
//Third-party
import {connect} from 'react-redux';
//components
import {sendReview} from '../../store/bs';
import {fetchUser} from '../../store/user';
import ModalAccount from '../shared/ModalAccount';

class Review extends Component{
    state = {
        isOpen:false,
        user:"",
        bs:this.props.bs['username'],
        message:'',
        location:'',
        response:'',
        error:"",
        action:"send review"
    };
    toggle = () => this.setState({isOpen:!this.state.isOpen});
    onChange = e => {
        return this.setState({[e.target.name] : e.target.value })
    };
    onSubmit = async e => {
        e.preventDefault();
        let token = this.props.token;
        if(!token) return this.setState({isOpen:true});
        this.setState({action:'Sending....'});
        await this.props.fetchUser(token).then(async () => {

            this.setState({error:''});
            let {message,bs} = this.state;
            let user = this.props.user['_id'];
            if(!message) return this.setState({error:'You must fill the message',action:'try again'});
            const data = {message,user,bs};
            await this.props.sendReview(data).then(() => {
                return this.setState({
                    action:this.props.message,error:'',message:''
                 });
            }).catch(console.log);


        }).catch(console.log);
    };
    render(){
        return(
            <section className="manual_order">
                <h6 className="bs_pg_heading">Have experienced our services, Leave a comment</h6>
                <form onSubmit={this.onSubmit}>
                 <div className="form-group">
                     {
                         this.state.error ? (
                             <div className="alert alert-danger">{this.state.error}</div>
                         ) : null
                     }
                     <div className="form-group bs_review">
                         <label htmlFor="message">Your message</label>
                         <textarea name="message"
                         className="form-control"
                         onChange={this.onChange}
                         placeholder="e.g am happy for you"
                         value={this.state.message}
                         rows="5"
                         cols="40"
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
    sendReview,
    fetchUser
};
export default connect(mapToProps,dispatchToProps)(Review);