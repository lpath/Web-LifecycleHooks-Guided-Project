import React from 'react';
import { shape, number, string } from 'prop-types';

export function checkOnlineStatus(id) {
  console.log('starting online status check');

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(id % 2 === 0);
    }, 1000);
  });
}

// ONLINE STATUS
// 1- implement a setOnlineStatus method to update state.isOnline
// 2- componentDidMount to setOnlineStatus and listen for dbclicks on document
// 3- bug: online status does not update when changing friends
// 4- componentDidUpdate to setOnlineStatus when friend changes
// 5- show to avoid componentDidUpdate using a key
// REFRESH BUTTON
// 1- implement refresh with componentWillReceiveProps
// 2- refactor to use only componentDidUpdate
// 3- refactor to use a key combining friend.id and a random id
// 4- componentWillUnmount to clean up dbclick listener
// 5- mention componentWillMount
export default class Friend extends React.Component {
  constructor(props) {
    console.log('constructor of Friend runs!');
    super(props);
    this.state = {
      isOnline: false,
    };
  }

  render() {
    console.log('render function of Friend runs!');

    const { isOnline } = this.state;
    const { friend } = this.props;

    return (
      <div>
        <h3>{friend.name}</h3>

        <div style={{ color: isOnline ? 'green' : 'red' }}>
          is {!isOnline && 'NOT '}online
          {isOnline && ' :)'}
        </div>
      </div>
    );
  }
}

Friend.propTypes = {
  friend: shape({
    id: number.isRequired,
    name: string.isRequired,
  }).isRequired,
};
