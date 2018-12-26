import { observable, action, autorun, toJS, reaction, trace, computed } from "mobx";

class Store {
  
  @observable user_name = 'aga';
  @observable users = [];

  @action addName(data) {
    this.users = data
  } 
  
  @computed get numberOfUnpaidInvoices() {
    
  }
}

const store = window.store = new Store
export default store;

autorun(() => {
  console.log(toJS(store.users))
  trace()
});
