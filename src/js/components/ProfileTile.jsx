import React from 'react';
import { observer, inject } from "mobx-react";
import Text from './Text';

@inject('uiStore')
@observer
export class ProfileTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    // this.renderUsersComments = this.renderUsersComments.bind(this);
  }

  displayDetails = () => {
    const {uiStore, id} = this.props;

    uiStore.displayDetails(id);
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
        <p>{id}</p>
        <Text 
        text='click'
        onClick={() => this.displayDetails()}/>
        {uiStore.displayProfile && uiStore.displayProfileId === id ? <p>show</p> : null}
      </div>
      );
    }
  }


export default ProfileTile;