import { observable, action, autorun } from "mobx";

class UIstore {
  
  @observable isLoading = false;
  @observable displayProfile = false;

  @action loader(data) {
    this.isLoading = data
  }

  @action displayDetails(data) {
    this.displayProfile = data
  }

}

const uiStore = window.store = new UIstore
export default uiStore;

autorun(() => {
  console.log(uiStore)
});
