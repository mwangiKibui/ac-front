import React, { Component } from 'react'

export class UserFields extends Component {

    render() {
        return (
            <>

               <div className="form-group">
                    <h3 className="multi_step_form_heading">Step 3 of {this.props.steps}</h3>
                    {
                        this.props.error ? (
                         <div className="alert alert-danger">{this.props.error}</div>
                        ) : null
                    }
               </div>

               <div className="form-group user_signup">
                    <label htmlFor="register-location">Location</label>
                    <select name="location" className="form-control" value={this.props.location} onChange={this.props.handleChange}>
                        <option value="">select your campus</option>
                        <option value="karatina university-main campus">karatina university-main campus</option>
                        <option value="karatina university-town campus">karatina university-town campus</option>
                        <option value="karatina university-nairobi campus">karatina university-nairobi campus</option>
                    </select>
                </div>

                <div className="form-group user_signup">
                    <label htmlFor="register-confirm">Password</label>
                    <input
                        id="register-confirm"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={this.props.handleChange}
                        value={this.props.password}
                        minLength={6}
                    />
                </div>

                <div className="form-group">
                    <input disabled={!this.props.location || !this.props.password} type="submit" className="btn btn-outline-success" value={this.props.action} />
                    <button className="btn btn-outline-success" onClick={this.props.handlePrevStep}>Back</button>
                </div>

            </>
        )
    }
}

export default UserFields;