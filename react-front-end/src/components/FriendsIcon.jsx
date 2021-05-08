import { Container } from "@material-ui/core";
import React from "react";

const FriendsIcon = (props) => {
  const friends = props.group.map((friend) => {
    return <img className="friend-avatar" src={friend.avatar} />;
  });

  return <div>{friends}</div>;
};

export default FriendsIcon;
