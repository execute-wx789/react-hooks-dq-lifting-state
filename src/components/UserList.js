import React from "react";
import UserCard from "./UserCard";

function UserList({users, setCurrUser}) {
  return (
    <div className="ui cards">
      {users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={() => setCurrUser((user.id)-1)}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
