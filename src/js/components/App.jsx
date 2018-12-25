import React, {Fragment} from 'react';
import { observer, inject } from "mobx-react";
import data from '../data.json';
import Profile from './ProfileTile';

@inject('dataStore', 'uiStore')
@observer
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderLeeds = this.renderLeeds.bind(this);
  }

  componentDidMount(){
    const {users} = this.props.dataStore;
    this.props.dataStore.addName(data)
  }

  renderLeeds() {
    const { dataStore } = this.props;
    console.log(dataStore)
    const renderData = dataStore.users.map(item => {
        return (
          <Profile 
          name={item.user.name}
          company={item.user.company}
          invoices={item.unpaid_invoices}
          />
        )
      })

    return renderData;  
  }

    render() {
      const renderLeeds = this.renderLeeds();
      return (
        <Fragment>
          <div className='header profile'>
            <form>
            <input type='button' value='click'/>
            <input type='text' placeholder='jjjjj'/>
            </form>
          </div>
        {renderLeeds}
        </Fragment>
      );
    }
  }
  
  export default App;