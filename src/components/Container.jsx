import React from 'react';
import FriendSelector from './FriendSelector';

const friends = [
  { id: 1, name: 'Luke' },
  { id: 2, name: 'Josh' },
  { id: 3, name: 'Tom' },
  { id: 4, name: 'Samar' },
];

export default function Container() {
  return (
    <FriendSelector friends={friends} />
  );
}
