import React from 'react';
import { IUser } from '../../interfaces/user.interface';

interface UserItemProps {
    user: IUser;
}

const UserItem: React.FC<UserItemProps> = ({ user: { name, username } }) => {
  return (
    <li>
      Full Name: {name}
      <br />
      Username: {username}
    </li>
  );
};

export default UserItem;