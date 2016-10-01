import React from 'react';

export const User = ({ user }) => (
  <li>
    <span>{user.username} </span>(
      {user.roles.map((role, i) =>
        <span key={i}>
          {i > 0 ? ', ' : ''}
          {role}
          {i == user.roles.length - 1 ? '' : ' '}
        </span>
      )}
    )
  </li>
);
