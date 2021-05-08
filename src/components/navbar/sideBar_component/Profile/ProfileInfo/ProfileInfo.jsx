import React from 'react';

import s1 from './ProfileInfo.module.css'
const ProfileInfo = () => {
  return (
    <div className={s1.content}>
      <div >
        <img src='https://png.pngtree.com/thumb_back/fw800/back_pic/04/06/69/4958106611a2dbe.jpg' className={s1.ImgWidth}/>
      </div>
      <div className={s1.item}>
        ava + description
    </div>
    </div>
  )
}

export default ProfileInfo;