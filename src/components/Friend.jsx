import React from 'react';


export function checkOnlineStatus(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(id % 2 === 0);
    }, 1000);
  });
}

// 1- build a setOnlineStatus function to update state
// 2- componentDidMount
// 3- componentDidUpdate
export default class Friend extends React.Component {
  state = {
    isOnline: false,
  }

  componentDidMount() {
    console.log('fetching friend status after mounting in dom...');
    this.setOnlineStatus(this.props.friend.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.friend.id !== this.props.friend.id) {
      console.log('checking status after updating dom...');
      this.setOnlineStatus(this.props.friend.id);
    }
  }

  setOnlineStatus = () => {
    checkOnlineStatus(this.props.friend.id)
      .then(isOnline => this.setState({ isOnline }));
  }

  render() {
    console.log('render function runs!');
    return (
      <div>
        <h3>{this.props.friend.name}</h3>
        <div style={{ color: this.state.isOnline ? 'green' : 'red' }}>
          is {!this.state.isOnline && 'NOT '}online
          {this.state.isOnline && ' :)'}
        </div>
      </div>
    );
  }
}
