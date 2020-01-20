import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
const TextInputGrp = props => {
  const { label, name, value, placeholder, type, onChange, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGrp.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGrp.defaultProps = {
  type: "text"
};
export default TextInputGrp;
