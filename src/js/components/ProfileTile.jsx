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

  renderNumberOfUnpaid = () => {
    const { 
      id,
      dataStore
    } = this.props;
    const user = dataStore.users.filter(item => item.user.id === id);

    return user[0].invoices.filter(filter => filter.payment_status === false).length
  }

  render() {
    const { 
      id,
      name,
      company,
      uiStore,
      dataStore
    } = this.props;
    const renderNumberOfUnpaid = this.renderNumberOfUnpaid();

    return (
      <div className='profile-wrapper'>
        <Text text={name}/>
        <Text text={company}/>
        <Text text={`this company has ${renderNumberOfUnpaid} unpaid invoices`}/>
        <p>{dataStore.unpaidInvoices}</p>
        <Text 
        className='btn btn--display'
        text='display invoices list'
        onClick={() => this.displayDetails()}/>
      </div>
      );
    }
  }


export default ProfileTile;