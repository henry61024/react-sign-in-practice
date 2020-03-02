import React, { MouseEventHandler } from 'react';

interface UserHeaderProps {
  onSignOut: MouseEventHandler;
}

const UserHeader: React.FC<UserHeaderProps> = ({ onSignOut }) => (
  <div>
    Welcome!
    <button onClick={onSignOut}>Sign out</button>
  </div>
);

export default UserHeader;
