import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";
//

class Contact extends Component {
  state = {
    showContactBool: false
  };
  // This function is however optional. we can add it to the button
  showContact = e => {
    this.setState({
      showContactBool: !this.state.showContactBool
    });
  };
  // This func will take a delete func as props and call it.
  delContact = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
    // dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { showContactBool } = this.state;
    const { name, email, phone, id } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div style={{ maxWidth: "800px" }} className="container">
              <div className="card card-body mb-3">
                <h4
                  style={{
                    fontSize: "1rem",
                    cursor: "pointer"
                  }}
                >
                  {name}{" "}
                  <i
                    className="lni-angle-double-down text-danger"
                    onClick={this.showContact}
                  ></i>
                  <small>
                    <i
                      className="lni-close text-danger"
                      onClick={this.delContact.bind(this, id, dispatch)}
                    ></i>
                    <Link to={`contact/edit/${id}`} className="nav-link">
                      <i className="lni-pencil-alt text-dark"></i>
                    </Link>
                  </small>
                </h4>
                {showContactBool ? (
                  <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                  </ul>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // delClick: PropTypes.func.isRequired
};
export default Contact;
