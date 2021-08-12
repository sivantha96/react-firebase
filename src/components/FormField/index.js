import React from "react";
import PropTypes from "prop-types";

const FormField = ({ label, type, placeholder, forwardedRef }) => {
  return (
    <div className="flex flex-col w-full mb-2">
      <label>{label}</label>
      <input
        ref={forwardedRef}
        className="px-4 py-3 rounded"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  ref: PropTypes.any,
};

export default FormField;
