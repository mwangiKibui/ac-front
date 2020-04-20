import React, { Component } from 'react'

export class ContactFields extends Component {
    render() {
        return (
            <>

            <div className="form-group">
                <h3 className="multi_step_form_heading">Step 2 of {this.props.steps}</h3>
            </div>

            {
                this.props.error ? (
                    <div className="form-group">
                        <div className="alert alert-danger">{this.props.error}</div>
                    </div>
                ) : null
            }

            <div className="form-group user_signup">
            <label htmlFor="register-email">Email address</label>
            <input
                id="register-email"
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                onChange={this.props.handleChange}
                value={this.props.email}
                required={true}
            />
            </div>

            {/** i shall use a prepend here for the section of 254 */}
            <div className="user_signup">
            <label htmlFor="phone ">Phone number</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-phone-addon">+254</span>
                </div>
                <input
                    id="phone"
                    type="text"
                    className="form-control"
                    placeholder="7XXXXXXXX"
                    name="phone"
                    onChange={this.props.handleChange}
                    value={this.props.phone}
                />
            </div>
            </div>

            <div className="form-group">
                <button disabled={!this.props.email || !this.props.phone} 
                className="btn btn-success" 
                onClick={this.props.handleNextStep}>Next</button>
                <button className="btn btn-outline-success" onClick={this.props.handlePrevStep}>Back</button>
            </div>
            </>
        )
    }
}

export default ContactFields; 