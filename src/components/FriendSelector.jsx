import React from 'react';
import { arrayOf, number, string, shape } from 'prop-types';
import Friend from './Friend';

export default class FriendSelector extends React.Component {
  state = {
    selectedFriendId: null,
  }

  setCurrentFriend = id => this.setState({ selectedFriendId: id })

  getCurrentFriend = () => this.props.friends.find(
    fr => fr.id === this.state.selectedFriendId,
  )

  render() {
    return (
      <div>
        Select a friend to chat with:&nbsp;
        {
          this.props.friends.map(friend => {
            return (
              <button
                key={friend.id}
                onClick={() => this.setCurrentFriend(friend.id)}
              >
                {friend.name}
              </button>
            );
          })
        }
        {
          this.state.selectedFriendId &&
          <Friend friend={this.getCurrentFriend()} />
        }
        <br />
        <button onClick={() => this.setCurrentFriend(null)}>
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
