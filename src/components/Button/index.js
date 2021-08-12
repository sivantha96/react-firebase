import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, style, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      style={style}
      className={`text-white rounded py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

export default Button;
