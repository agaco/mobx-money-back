import { observable, action, autorun } from "mobx";

class UIstore {
  
  @observable isLoading = false;
  @observable displayProfile = false;
  @observable displayProfileId = null;

  @action loader(data) {
    this.isLoading = data
  }

  @action displayDetails(data) {
    this.displayProfile = !this.displayProfile
    this.displayProfileId = data
  }

}

const uiStore = window.store = new UIstore
export default uiStore;

autorun(() => {
  console.log(uiStore)
});
