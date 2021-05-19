import React from 'react';
import LinearProgressWithLabel from "./helper_components/LinearProgressWithLabel";

const GroupItem = (props) => {
  console.log("group props:", props)
  return (
    <>
    <div className="group-titles">
    </div>
    <div className="image-and-bar">
      <img className="avatar-img" alt="user_avatar" src={props.avatar} />
      <div className="name-and-bar">
        <h4>{props.name}</h4>
        <LinearProgressWithLabel value={props.progress} />
      </div>
    </div>
    </>
  )
}

export default GroupItem;