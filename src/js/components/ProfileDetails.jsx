import React, {Fragment} from 'react';
import { toJS } from 'mobx';
import { observer, inject } from "mobx-react";
import Text from './Text';
import Img from './Img';

@inject('dataStore', 'uiStore')
export class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.renderDetails = this.renderDetails.bind(this);
  }

  renderDetails() {
    const { dataStore, uiStore } = this.props;

      const filtered = this.props.dataStore.users.filter(item => {
        return item.user.id === uiStore.displayProfileId 
      })

    // console.log(toJS(filtered[0]))
    return filtered[0]
  }

  countInvoiceOverdue = (created, overdue) => {

    const currentDate = new Date();
    const invoiceCreationDate = created;
    const overdueDate = overdue;
    const oneDay = 24*60*60*1000;

    const checkIfInvoiceIsOverdue = currentDate.getTime() - (new Date(invoiceCreationDate).getTime() + overdueDate*oneDay)

    return Math.floor(checkIfInvoiceIsOverdue/oneDay) > 0 ? Math.floor(checkIfInvoiceIsOverdue/oneDay) : null
  }

  renderUnpaidInvoices = (data) => {
    const { dataStore, uiStore } = this.props;

    const item = data.unpaid_invoices;
    console.log(toJS(data))
    return item.map((item, index) => {
        const overdue = this.countInvoiceOverdue(item.created_at, item.due_time)
      return (
        <div key={index} className='invoices-list--item'>
          <p>{`${item.amount} ${item.currency}`}</p>
          <p>{`created at: ${new Date(item.created_at).toDateString()}`}</p>
          <p>{`due time: ${item.due_time} days`}</p>
          <p>{`overdue: ${overdue != null ? overdue : ''} ${overdue != null ? 'days' : 'no'} `}</p>
          <p>{item.comment}</p>
        </div>
        
      )
    })
  }

  render() {
    const { 
      id,
      dataStore,
      uiStore,
      data,
    } = this.props;

    const render = this.renderDetails();
    const renderInvoices = this.renderUnpaidInvoices(render);
    return (
      <Fragment>
        <Img src={render.user.photo}/>
        <Text text={render != null ? render.user.name : null}/>
        <Text text={render.user.company}/>
        <section className='invoices-list'>
          {renderInvoices}
        </section>
      </Fragment>

      );
    }
  }


export default ProfileDetails;