import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Img = ({
  className, 
  alt, 
  src,
  onClick,
}) => (
  <Fragment>
    <img onClick={onClick} className={className} src={src} alt={alt}/>
  </Fragment>    
);

Img.propTypes = {
  className: PropTypes.string.isRequired,
  alt: PropTypes.string,

};
Img.defaultProps = {
  className: '',
  alt: '',
};

export default Img;