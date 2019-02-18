import React from 'react';


export function checkOnlineStatus(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(id % 2 === 0);
    }, 1000);
  });
}

export default class Friend extends React.Component {
  state = {
    isOnline: false,
  }

  componentWillMount() {
    this.setOnlineStatus(this.props.friend.id);
  }

  setOnlineStatus = () => {
    checkOnlineStatus(this.props.friend.id)
      .then(isOnline => this.setState({ isOnline }));
  }

  render() {
    return (
      <div>
        <h3>{this.props.friend.name}</h3>
        is {!this.state.isOnline && 'NOT '}online
        {this.state.isOnline && ' :)'}
      </div>
    );
  }
}
