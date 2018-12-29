import { observable, action, autorun, toJS, reaction, trace, computed } from "mobx";

class Store {
  
  @observable user_name = 'aga';
  @observable users = [];

  @action addName(data) {
    this.users = data
  } 

  @action changeInvStatus(displayedId, invoiceId) {
    
    const company = this.users.filter((item) => {
      return item.user.id === displayedId
    });

    const newValue = company[0].invoices.find(invoice => invoice.number === invoiceId)
    newValue.payment_status = true
  }
  
  @computed get numberOfUnpaidInvoices() {
    
  }
}

const store = window.store = new Store
export default store;

autorun(() => {
  console.log(toJS(store.users))
});
