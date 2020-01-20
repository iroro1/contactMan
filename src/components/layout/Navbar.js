import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = props => {
  const { brand } = props;
  return (
    <div className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0 ">
      <div className="container ">
        <Link to="/" className="navbar-brand">
          {brand}
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className=" " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <div style={navstyles}>
    //   <h1>{brand}</h1>
    // </div>
  );
};

Navbar.defaultProps = {
  brand: "Error"
};

Navbar.propTypes = {
  brand: PropTypes.string.isRequired
};

// const navstyles = {
//   color: "white",
//   fonstSize: "4rem"
// };
export default Navbar;
