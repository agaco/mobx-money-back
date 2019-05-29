// eslint-disable-next-line prop-types
import {
  observable,
  action,
  // autorun,
} from 'mobx';

class UIstore {
  @observable isLoading = false;

  @observable displayProfile = false;

  @observable displayProfileId = null;

  @action loader(data) {
    this.isLoading = data;
  }

  @action displayDetails(data) {
    this.displayProfile = true;
    this.displayProfileId = data;
  }

  @action hideDetails() {
    this.displayProfile = false;
    this.displayProfileId = null;
  }
}

// eslint-disable-next-line no-multi-assign
const uiStore = window.store = new UIstore();

export default uiStore;

// autorun(() => {
//   // console.log(toJS(uiStore.displayProfileId))
// });
