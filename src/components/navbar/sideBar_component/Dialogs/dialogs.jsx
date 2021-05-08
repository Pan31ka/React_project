import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import s from './Dialogs.module.css';
const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}> {props.name}</NavLink>
        </div>
    )
}
const MessageItem = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.item}>
            <div className={s.dialogs}>
                <DialogItem name="Nikita" id="1" />
                <DialogItem name="Nik" id="2" />
                <DialogItem name="Nikita" id="3" />
                <DialogItem name="Nikita" id="4" />
                <DialogItem name="Nikita" id="5" />

            </div>
            <div className={s.messages}>
                <MessageItem text=" Are you useless?" />
                <MessageItem text=" Are you useless?" />
                <MessageItem text=" Are you useless?" />
                <MessageItem text=" Are you useless?" />
                <MessageItem text=" Are you useless?" />
            </div>
        </div>
    )
}
export default Dialogs;