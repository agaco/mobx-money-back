import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import AddComment from './AddComment';
import { postNewComment, addOneLike, addOneFollow } from '../actions';
import Img from './Img';
import heart from './../../images/heart.svg';


export class ProfileTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCommentTargetValue: '',
      displayComments: true,
    };
    this.rrenderUsersComments = this.renderUsersComments.bind(this);
    this.renderTime = this.renderTime.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addTofriends = this.addTofriends.bind(this);
    this.addToFollowing = this.addToFollowing.bind(this);
  }

  addTofriends() { 
    const { addOneLike, profile } = this.props;

    const data = profile.user.friends_count + 1;
    addOneLike(data);
  }

  addToFollowing() { 
    const { addOneFollow, profile } = this.props;

    const data = profile.user.followers_count + 1;
    addOneFollow(data);
  }

  renderTime(date) {
    const currentDate = new Date().getTime();
    const commentDate = Date.parse(date);
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.floor((currentDate - commentDate)/oneDay);

    return days 
  }


  renderUsersComments() {
    const { profile } = this.props;
    const comments = profile != null ? profile.comments : null

    return (
      comments != null
      ? comments.map((item, index) => {
        
        return (
          <Comment
            key={index}
            name={item.name} 
            comment={item.comment}
            imgSrc={profile.user.photo} 
            className='comment-item-container'
            date={this.renderTime(item.created_at)}
            />
        );
      })
      : <div>is empty</div>
    );
  }

  onChange() {
    this.setState({newCommentTargetValue: event.target.value});
  }

  onSubmit(e){
    const { postNewComment } = this.props;

    e.preventDefault();

    const payload = {
      "name" : "Mike Ross",
      "created_at": new Date().toString(),
      "comment": this.state.newCommentTargetValue
    };

    postNewComment(payload)
    .then(() => this.setState({newCommentTargetValue: ''}));
  }

    render() {
      const { profile } = this.props;
      const { displayComments } = this.state;
      const renderUsersComments = this.renderUsersComments(displayComments);

      const commentsQuantity = profile != null ? profile.comments.length : 0
      
      return (
        <div className='profile-wrapper'>
            <div className='user-details-wrapper'>
            <div className='user-data-container'>
            <div className='user-photo'>
            <Img className='user-photo--img' src={profile != null ? profile.user.photo : null} />
          </div>
          <div className='user-data'>
            <p className='user-data--name'>{profile != null ? profile.user.name : null}</p>
            <p className='user-data--follow-icon' onClick={() => this.addTofriends()}>
              <Img className='user-data--follow-icon--img' src={heart} />
            </p>
            <p className='user-data--location'>
              {profile != null ? `${profile.user.location.city}, ${profile.user.location.country}` : null}
            </p>
          </div>
          </div>
    
          <div className='user-data-container'>
            <div className='user-social'>
            <div className='user-social--item like'>
              <span>{profile != null ? `${profile.user.friends_count}` : null}</span>
              <span className='sub'>Likes</span>
            </div>
            <div className='user-social--item followed'>
              <span>{profile != null ? `${profile.user.followers_count}` : null}</span>
              <span className='sub'>Following</span>
            </div>
            <div className='user-social--item followers'>
              <span>{profile != null ? `${profile.user.followed_count}` : null}</span>
              <span className='sub'>Followers</span>
            </div>
          </div>
          <div className='user-follow-button'>
            <button onClick={() => this.addToFollowing()}>follow</button>
          </div>
          </div>
          </div>
          <div className='comments-wrapper'>
            <a className='dsplay-comments_btn'
            onClick={() => this.setState({displayComments: !displayComments})}>{`Hide comments (${commentsQuantity})`}</a>
            {  displayComments ? renderUsersComments : null}      
          </div>
          <AddComment   
          className='input-new-comment' 
          onSubmit={() => this.onSubmit(event)}
          onChange={() => this.onChange()}
          value={this.state.newCommentTargetValue}
          placeholder='Add a comment'
          /> 
        </div>
      );
    }
  }

export const mapStateToProps = state => ({
  profile: state.data.profile,
});

export const mapDispatchToProps = dispatch => ({
  postNewComment: data => dispatch(postNewComment(data)),
  addOneLike: data => dispatch(addOneLike(data)),
  addOneFollow: data => dispatch(addOneFollow(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileTile);