import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogs = [
        {id:1, name:'Dimych'},
        {id:2, name:'Sveta'},
        {id:3, name:'Andrey'},
        {id:4, name:'Sasha'},
        {id:5, name:'Viktor'},
    ]

    let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'How are you'},
        {id:3, message:'Yo'},
        {id:4, message:'Yo'},
        {id:5, message:'Yo'},
    ]

    let dialogElements =  dialogs.map(d => <DialogItem  name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m=> <Message message={m.message}/>)

    return(
        <div className={s.dialogs}>

            <div className={s.dialogItems}>
                { dialogElements }
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs