import React from 'react';
import PropTypes from 'prop-types';


const Button = ({
  className, 
  onClick, 
  label,
  type,
  disabled,
}) => (

  <button 
    className={className} 
    onClick={onClick} 
    type={type} 
    disabled={disabled}
    >
    { label }
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  sign: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  className: '',
  sign: '',
  type: '',
  limit: 0,
  disabled: false,
};

export default Button;