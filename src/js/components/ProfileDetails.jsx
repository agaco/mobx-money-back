import React, {Fragment} from 'react';
import { toJS } from 'mobx';
import { observer, inject } from "mobx-react";
import Text from './Text';
import Img from './Img';
import close from './../../images/close.svg';
import Button from './Button';

@inject('dataStore', 'uiStore')
@observer
export class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.renderDetails = this.renderDetails.bind(this);
  }

  closeDetails = () => {
    const { uiStore } = this.props;
    uiStore.hideDetails();
  }

  renderDetails() {
    const { dataStore, uiStore } = this.props;

      const filtered = this.props.dataStore.users.filter(item => {
        return item.user.id === uiStore.displayProfileId 
      })
    return filtered[0]
  }

  countInvoiceOverdue = (created, overdue) => {

    const currentDate = new Date();
    const invoiceCreationDate = created;
    const overdueDate = overdue;
    const oneDay = 24*60*60*1000;
    const checkIfInvoiceIsOverdue = currentDate.getTime() - (new Date(invoiceCreationDate).getTime() + overdueDate*oneDay)

    return Math.floor(checkIfInvoiceIsOverdue/oneDay) > 0 ? `${Math.floor(checkIfInvoiceIsOverdue / oneDay)} days` : null
  }

  renderChangeStatusBtn = (id, payment_status) => {
    const { dataStore, uiStore } = this.props;

    return (
      payment_status
      ? null
      : <Button label={"click"} onClick={() => dataStore.changeInvStatus(uiStore.displayProfileId, id)}/>
    )
  };

  renderUnpaidInvoices = (data) => {
    const { dataStore, uiStore } = this.props;

    const invoices = data.invoices;

    return invoices.map((item, index) => {
        const overdue = this.countInvoiceOverdue(item.created_at, item.due_time)
      return (
        <div key={index} className='invoices-list--item'>
          <p><strong>Invoice number: </strong>{`${item.number}`}</p>
          <p><strong>Payment status: </strong>{`${item.payment_status ? 'paid' : 'unpaid'} `} {this.renderChangeStatusBtn(item.number, item.payment_status)}</p> 
          <p><strong>Sum: </strong> {`${item.amount} ${item.currency}`}</p>
          <p><strong>Date of issue: </strong>{`${new Date(item.created_at).toDateString()}`}</p>
          <p><strong>Due time: </strong>{`${item.due_time} days`}</p>
          <p><strong>Overdue: </strong>{`${overdue != null && !item.payment_status ? overdue : ''}`}</p>
          <p>{item.comment}</p>
        </div>
        
      )
    })
  }

  render() {
    const { id } = this.props;

    const render = this.renderDetails();
    const renderInvoices = this.renderUnpaidInvoices(render);
    return (
      <Fragment>
        <Img src={render.user.photo} className='logo'/>
        <Img src={close} className='btn-close' onClick={() => this.closeDetails()}/>
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