import React from 'react';
import { shape, number, string } from 'prop-types';

const cb = () => console.log('double click!');

export function fakeCheckIfOnlineAjax(id) {
  console.log('network request starts');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(id % 2 === 0); // "return" a boolean
    }, 1000);
  });
}

// ONLINE STATUS
// 0- discuss the constructor and the render method
// 1- implement a setOnlineStatus method to update state.isOnline
// 2- implement componentDidMount to setOnlineStatus
// 3- check if online status updates correctly when changing friends
// 4- implement componentDidUpdate to setOnlineStatus when friend changes
// 5- finish up componentDidUpdate comparing old props with new props
// 6- show to avoid componentDidUpdate altogether using a key
// 7- demonstrate componentWillUnmount
// REFRESH BUTTON
// 1- implement refresh with componentWillReceiveProps
// 2- refactor to use only componentDidUpdate
// 3- refactor to use a key combining friend.id and a random id
export default class Friend extends React.Component {
  constructor(props) {
    console.log('constructor of Friend runs!');

    super(props);
    this.state = {
      isOnline: props.isOnline,
    };

    this.anyGlobal = null;
  }

  componentDidMount() {
    document.addEventListener('dblclick', cb);

    // start camera and record!!!!

    console.log('componentDidMount runs!');
    fakeCheckIfOnlineAjax(this.props.friend.id)
      .then(data => this.setState({ isOnline: data }));
  }

  // componentDidUpdate(prevProps) {
  //   console.log('componentDidUpdate runs!');
  //   const hasFriendChanged = prevProps.friend.id !== this.props.friend.id;

  //   if (hasFriendChanged) {
  //     console.log('friend has changed');
  //     fakeCheckIfOnlineAjax(this.props.friend.id)
  //       .then(data => this.setState({ isOnline: data }));
  //   } else {
  //     console.log('friend has NOT changed');
  //   }
  // }

  componentWillUnmount() {
    // cancel network requests
    // clean event listeners
    // stopping the camera
    console.log('Friend is about to unmount');
    document.removeEventListener('dblclick', cb);
  }

  render() {
    console.log('render of Friend runs!'); // questionable

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
