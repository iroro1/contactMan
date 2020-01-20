import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import About from "./components/pages/About";
import { Provider } from "./context";
import { NotFound } from "./components/pages/NotFound";

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar brand={"Contact Manager"} />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
          <div className="container"></div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
