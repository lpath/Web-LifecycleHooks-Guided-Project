import React from 'react';


export function checkOnlineStatus(id) {
  console.log('checking online status...');
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

  componentWillMount() {
    console.log('componentWillMount runs');
  }

  componentDidMount() {
    console.log('about to fetch friend status in componentDidMount');
    this.setOnlineStatus(this.props.friend.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.friend.id !== this.props.friend.id) {
      console.log('about to check status in componentDidUpdate');
      this.setOnlineStatus(this.props.friend.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.randomId !== nextProps.randomId) {
      console.log('somebody hit refresh, componentWillReceiveProps');
      this.setOnlineStatus(this.props.friend.id);
    }
  }

  setOnlineStatus = () => {
    checkOnlineStatus(this.props.friend.id)
      .then(isOnline => {
        console.log('uh, oh, calling setState...');
        this.setState({ isOnline });
      });
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
