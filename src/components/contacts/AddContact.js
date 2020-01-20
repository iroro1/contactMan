import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGrp from "./TextInputGrp";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Error Checking
    if (name === "") {
      this.setState({ errors: { name: "Name is required!" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required!" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required!" } });
      return;
    }
    const newContact = {
      name,
      email,
      phone
    };

    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: ""
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="card bg-light mb-3 ">
                <div className="card-header">
                  {" "}
                  <b>Add Contact</b>
                </div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGrp
                      label="Name"
                      placeholder="Enter your name..."
                      name="name"
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGrp
                      label="Email"
                      type="email"
                      placeholder="Enter your email..."
                      name="email"
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <TextInputGrp
                      label="Phone"
                      placeholder="Enter your phone..."
                      name="phone"
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                    <input type="submit" className="btn btn-block btn-dark" />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
