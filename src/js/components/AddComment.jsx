import React from 'react';
import PropTypes from 'prop-types';

const AddComment = ({
  className, 
  onSubmit,
  onChange,
  value,
  placeholder,
}) => (
  <form onSubmit={onSubmit} className='form-wrapper'>
    <input type="text" className={className} onChange={onChange} value={value} placeholder={placeholder}/>
  </form>
);

AddComment.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};
AddComment.defaultProps = {
  className: '',
  text: '',
};

export default AddComment;