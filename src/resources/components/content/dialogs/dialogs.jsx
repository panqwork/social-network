import React from 'react';
import s from './dialog.module.css';

//components 
import DialogList from './dialog_list/dialog_list'
import DialogChat from './dialog_chat/chat'
import StoreContext from '../../../../contextAPI/store_context';



const Dialogs = (props) => {
  return(
  <StoreContext.Consumer>
    {
      (store)=>{
        let state = store.getState();
        return (
          <div className={s.messages_content}>
            <DialogList dialogList={state.userMessages.dialogs}/>
            <DialogChat/>
          </div>
        )
      }
    }
  </StoreContext.Consumer>)
}

export default Dialogs;