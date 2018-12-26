import { observable, action, autorun, toJS } from "mobx";

class UIstore {
  
  @observable isLoading = false;
  @observable displayProfile = false;
  @observable displayProfileId = null;

  @action loader(data) {
    this.isLoading = data
  }

  @action displayDetails(data) {
    this.displayProfile = true
    this.displayProfileId = data
    console.log(this.displayProfileId)
  }

}

const uiStore = window.store = new UIstore
export default uiStore;

autorun(() => {
  console.log(toJS(uiStore.displayProfileId))
});
