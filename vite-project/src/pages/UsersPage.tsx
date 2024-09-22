import React from 'react';
import useGetUsers from '../hooks/useGetUsers';
import UsersList from '../components/users/UsersList';
import { UserService } from '../api/users/UserService';

const UsersPage: React.FC = () => {
  const userService = new UserService();
  const { users, error } = useGetUsers(userService);

  if (error) {
    return <p>Error fetching users: {error}</p>;
  }

  return <UsersList users={users} />;
};

export default UsersPage;
