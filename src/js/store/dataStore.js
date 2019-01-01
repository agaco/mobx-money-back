import { observable, action, autorun, toJS, reaction, trace, computed } from "mobx";

class Store {
  
  @observable user_name = 'aga';
  @observable users = [];
  @observable filter = [];

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


  
  @computed get unpaidInvoices() {
    // console.log(toJS(this.users))

        return this.users[0].user.name
  }
}

const store = window.store = new Store
export default store;

autorun(
  () => {
  console.log(toJS(store.users))
});
