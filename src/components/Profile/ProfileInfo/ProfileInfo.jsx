import React from "react";

import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return(
        <div>
        <div>
          {/* <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'></img> */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"></img>
      </div>
            <div className={s.descriptionBlock} >
                ava + description
            </div>


      </div> 
    )
}

export default ProfileInfo