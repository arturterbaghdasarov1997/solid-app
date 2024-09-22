import { useEffect, useState } from 'react';
import { IUser } from '../interfaces/user.interface';
import { IUserService } from '../api/users/UserService';

const useGetUsers = (userService: IUserService) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    userService.fetchUsers()
      .then(data => setUsers(data))
      .catch(err => setError(err.message));
  }, [userService]);

  return { users, error };
};

export default useGetUsers;
