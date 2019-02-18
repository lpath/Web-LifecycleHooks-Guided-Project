import React from 'react';


export function checkOnlineStatus(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(id % 2 === 0);
    }, 1000);
  });
}

export default class Friend extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.friend.name}</h3> is online
      </div>
    );
  }
}
