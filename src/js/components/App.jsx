import React, {Fragment} from 'react';
import { observer, inject } from "mobx-react";
import data from '../data.json';

@inject('store')
@observer
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderLeeds = this.renderLeeds.bind(this);
  }

  componentDidMount(){
    const {users} = this.props.store;
    this.props.store.addName(data)
  }

  renderLeeds() {
    const {users} = this.props.store;
    console.log(users)
    const renderData = users.map(item => {
        return item.user.name
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