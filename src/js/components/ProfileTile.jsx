import React from 'react';
import { observer, inject } from "mobx-react";
import { toJS } from 'mobx';
import Text from './Text';

@inject('uiStore', 'dataStore')
@observer
export class ProfileTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    // this.renderUsersComments = this.renderUsersComments.bind(this);
  }

  displayDetails = () => {
    const {uiStore, id, dataStore} = this.props;
    
    uiStore.displayDetails(id);
    // console.log(uiStore.displayProfileId)
    // console.log(toJS(dataStore.users))
  }

  render() {
    const { 
      id,
      name,
      company,
      uiStore,
    } = this.props;

    return (
      <div className='profile-wrapper'>
        <p>{name}</p>
        <p>{company}</p>
        <Text 
        className='btn btn--display'
        text='click'
        onClick={() => this.displayDetails()}/>
      </div>
      );
    }
  }


export default ProfileTile;