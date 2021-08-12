import React from 'react';
import PropTypes from 'prop-types';

function Alert({ title }) {
  if (!title || title.trim() === '') {
    return null;
  }
  return (
    <div className="p-3 my-2 bg-red-300 rounded">
      <span>{title}</span>
    </div>
  );
}

Alert.propTypes = {
  title: PropTypes.string,
};

export default Alert;
