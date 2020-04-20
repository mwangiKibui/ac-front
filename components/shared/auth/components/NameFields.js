import React, { Component } from 'react'

export class NameFields extends Component {
    render() {
        return (
            <>

                <div className="form-group">
                    <h3 className="multi_step_form_heading">Step 1 of {this.props.steps}</h3>
                </div>

                <div className="form-group user_signup">
                    <label htmlFor="firstname">Firstname</label>
                    <input
                        id="firstname"
                        type="text"
                        className="form-control"
                        placeholder="Enter Firstname"
                        name="firstname"
                        onChange={this.props.handleChange}
                        value={this.props.firstname}
                        required={true}
                    />
                </div>
                <div className="form-group user_signup">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                        id="lastname"
                        type="text"
                        className="form-control"
                        placeholder="Enter Lastname"
                        name="lastname"
                        onChange={this.props.handleChange}
                        value={this.props.lastname}
                        required={true}
                    />
                </div>
                <div className="form-group">
                    <button disabled={!this.props.firstname || !this.props.lastname}
                    className="btn btn-outline-success" 
                    onClick={this.props.handleNextStep}>Next</button>
                </div>
            </>
        )
    }
}

export default NameFields; 