import React from 'react';


export default class Friend extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.friend.name}</h3>
      </div>
    );
  }
}
