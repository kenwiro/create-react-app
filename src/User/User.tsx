import React from 'react';
import { User } from '../types/types';

const UserItem = ({ user }: { user: User }): JSX.Element => {
  return (
    <li>{user.name}</li>
  );
};

export default UserItem;
