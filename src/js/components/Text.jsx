import React from 'react';
import PropTypes from 'prop-types';


const Text = ({
  className, 
  onClick, 
  text,
}) => (

  <div 
    className={className} 
    onClick={onClick} 
    >
    { text }
  </div>
);

Text.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
Text.defaultProps = {
  className: '',
  sign: '',
  type: '',
  limit: 0,
  disabled: false,
};

export default Text;