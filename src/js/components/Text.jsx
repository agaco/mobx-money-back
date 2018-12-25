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
  sign: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
Text.defaultProps = {
  className: '',
  sign: '',
  type: '',
  limit: 0,
  disabled: false,
};

export default Text;