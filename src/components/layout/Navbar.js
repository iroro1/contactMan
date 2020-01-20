import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = props => {
  const { brand } = props;
  return (
    <nav className=" navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-1 ">
      <div className="container">
        <div className="container ">
          <a href="/" className="navbar-brand">
            {brand}
          </a>

          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="lni-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="lni-add-file"></i>Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="lni-question-circle"></i> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
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
