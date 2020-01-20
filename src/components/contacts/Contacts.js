import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
//
class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <>
              <div className="container ">
                <div className="jumbotron container">
                  <h3 className="text-center">Contact Manager</h3>
                  <p className="lead mx-auto">
                    This is a portfolio project to showcase knowledge of:
                  </p>
                  <ol className="ml-3" type="i">
                    <li>React Components and JSX.</li>
                    <li>React Router.</li>
                    <li>Component state management.</li>
                    <li>Context api for global state management.</li>
                    <li>
                      Making asynchronous calls to the Json placeholder fake
                      rest api using "async/await".
                    </li>
                  </ol>
                </div>
              </div>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
