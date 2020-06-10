import React from 'react';
import s from './style.module.css';
import Button from '../../../../generic/button/button';


export class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      statusText: this.props.profileStatus
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  diactivateEditMode = (e) => {
    this.setState({
      editMode: false
    })
    this.props.updateProfileStatus(this.state.statusText)
  }

  onChangeInputText = (e) => {
    this.setState({
      statusText: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.profileStatus !== this.props.profileStatus){
      this.setState({
        statusText: this.props.profileStatus
      })
    }
  }

  render() {
    return(
      <>
        {!this.state.editMode 
          ?
          <div onDoubleClick={this.activateEditMode} className={s.about}>
            {this.props.profileStatus || 'изменить статус'}
          </div>
          :
          <div>
            <input autoFocus={true} onChange={this.onChangeInputText} onBlur={this.diactivateEditMode} value={this.state.statusText} type="text"/>
          </div>
        }
      </>
    )
  }
}