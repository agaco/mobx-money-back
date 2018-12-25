import React from 'react';
import { observer, inject } from "mobx-react";
import Text from './Text';

@inject('uiStore')
@observer
export class ProfileTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    // this.renderUsersComments = this.renderUsersComments.bind(this);
  }


  render() {
    const { name, company } = this.props;
    return (
      <div className='profile-wrapper'>
        <p>{name}</p>
        <p>{company}</p>
        <Text 
        text='jhjhjhjhjhjh'
        onClick={() => console.log("hiuyuiyu") }/>
      }}
      </div>
      );
    }
  }


export default ProfileTile;