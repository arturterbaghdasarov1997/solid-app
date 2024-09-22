import React from 'react';
import { IUser } from '../../interfaces/user.interface';
import UserItem from './UserItem';

interface UsersListProps {
    users: IUser[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  if (!users.length) {
    return <p>No users available</p>;
  }

  return (
    <ul>
      {users.map(user => <UserItem key={user.id} user={user} />)}
    </ul>
  );
};

export default UsersList;