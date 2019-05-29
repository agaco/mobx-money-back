// eslint-disable-next-line prop-types
import {
  observable,
  action,
  computed,
} from 'mobx';

class Store {
  @observable userName = 'aga';

  @observable users = [];

  @observable filter = [];

  @action addName(data) {
    this.users = data;
  }

  @action changeInvStatus(displayedId, invoiceId) {
    const company = this.users.filter(item => item.user.id === displayedId);

    const newValue = company[0].invoices.find(invoice => invoice.number === invoiceId);
    newValue.payment_status = true;
  }


  @computed get unpaidInvoices() {
    return this.users[0].user.name;
  }
}

// eslint-disable-next-line no-multi-assign
const store = window.store = new Store();
export default store;

//
// autorun(
//   () => {
//   console.log(toJS(store.users))
// });
