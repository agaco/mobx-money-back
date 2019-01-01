import React, {Fragment} from 'react';
import { observer, inject } from "mobx-react";
import { toJS } from 'mobx';
import data_set from '../data.json';
import Profile from './ProfileTile';
import ProfileDetails from './ProfileDetails';
import Text from './Text';

@inject('dataStore', 'uiStore')
@observer
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderLeeds = this.renderLeeds.bind(this);
  }

  componentDidMount(){
    const { dataStore } = this.props;
    dataStore.addName(data_set)
  }

  renderLeeds() {
    const { dataStore } = this.props;
    const renderData = dataStore.users.map(item => {
        return (
          <Profile 
          key={item.user.id}
          name={item.user.name}
          company={item.user.company}
          invoices={item.invoices}
          id={item.user.id}
          />
        )
      })

    return renderData;  
  }
    render() {
      const { uiStore, dataStore } = this.props;
      const renderLeeds = this.renderLeeds();
      const renderDetails = uiStore.displayProfile && uiStore.displayProfileId !=null ? <ProfileDetails/> : null;

      return (
        <Fragment>
        <Text className='profiles' text='this is app'/>
          <div className='profiles'>
          <section className='profiles-list'>
            {renderLeeds}
          </section>
          <section className={`profiles-details ${uiStore.displayProfile && uiStore.displayProfileId !=null ? '' : 'hidden'}`}>
            {renderDetails}
          </section>
          </div>
        </Fragment>
      );
    }
  }
  
  export default App;