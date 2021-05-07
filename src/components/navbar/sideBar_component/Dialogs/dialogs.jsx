import React from 'react';
import classes from './Dialogs.module.css';
import s from './Dialogs.module.css';
const Dialogs = (props) => {
    return <div className={s.item}>
        <div className={s.dialogs}>
            <div className={s.dialog}>
                HE
            </div>
            <div className={s.dialog+' '+s.active}>
                HE
            </div>
            <div className={s.dialog}>
                HE
            </div>
            <div className={s.dialog}>
                HE
            </div>
            <div className={s.dialog}>
                HE
            </div>
        </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Are you useless?
                </div>
                <div className={s.message}>
                    Are you useless?
                </div>
                <div className={s.message}>
                    Are you useless?
                </div>
                <div className={s.message}>
                    Are you useless?
                </div>
                <div className={s.message}>
                    Are you useless?
                </div>
            </div>
    


    </div>

}
export default Dialogs;