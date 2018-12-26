import React from 'react';
import { connect } from 'react-redux';
import Img from './Img';

export class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStar: false,
    };
    // this.onDecrement = this.onDecrement.bind(this);
    // this.onIncrement = this.onIncrement.bind(this);
  }

  
    render() {
      const { imgSrc, comment, name, date, className} = this.props;
      return (
        <div className={className}>
          <div className='comment-wrapper'>
            <p className='comment-name'>{name}</p>
            <p className='comment-date'>{date}d</p>
            <p className='comment-content'>{comment}</p>
          </div>
        </div>
      );
    }
  }


export default Comment;