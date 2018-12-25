import { observable, action, autorun } from "mobx";

class Store {
  
  @observable user_name = 'aga';
  @observable.shallow users = [];

  @action addName(data) {
    this.users = data
  }
}

const store = window.store = new Store
export default store;

autorun(() => {
  console.log(store.users)
});
