import React from 'react';
import { arrayOf, number, string, shape } from 'prop-types';
import Friend from './Friend';

export default class FriendSelector extends React.Component {
  state = {
    currentFriendId: null,
  }

  setCurrentFriendId = id => this.setState({ currentFriendId: id })

  getCurrentFriend = () => this.props.friends.find(
    fr => fr.id === this.state.currentFriendId,
  )

  render() {
    return (
      <div>
        Select a friend to chat with:&nbsp;
        {
          this.props.friends.map(friend => (
            <button
              key={friend.id}
              onClick={() => this.setCurrentFriendId(friend.id)}
            >
              {friend.name}
            </button>
          ))
        }
        {
          this.state.currentFriendId &&
          <Friend friend={this.getCurrentFriend()} />
        }
        <br />
        <button onClick={() => this.setCurrentFriendId(null)}>
          Stop chatting
        </button>
      </div>
    );
  }
}

FriendSelector.propTypes = {
  friends: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
  })).isRequired,
};
