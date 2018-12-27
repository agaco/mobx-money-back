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
        <Text text={name}/>
        <Text text={company}/>
        <Text text='this company has x unpaid invoices'/>
        <Text 
        className='btn btn--display'
        text='click'
        onClick={() => this.displayDetails()}/>
      </div>
      );
    }
  }


export default ProfileTile;